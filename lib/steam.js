"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Steam = Steam;
const node_crypto_1 = require("node:crypto");
const openid_client_1 = require("openid-client");
const constants_1 = require("./constants");
const openid_1 = require("./utils/openid");
function Steam(request, options) {
    const callbackUrl = options.callbackUrl
        ? new URL(options.callbackUrl)
        : new URL('/api/auth/callback', process.env.NEXTAUTH_URL);
    // realm: https://example.com
    // returnTo: https://example.com/api/auth/callback/steam
    const realm = callbackUrl.origin;
    const returnTo = `${callbackUrl.href}/${constants_1.STEAM_PROVIDER_ID}`;
    if (!options.resolveEndpoint && (!options.clientSecret || options.clientSecret.length < 1)) {
        throw new Error("Steam provider's `clientSecret` is empty. You can obtain an API key here: https://steamcommunity.com/dev/apikey"); /* :contentReference[oaicite:0]{index=0} */
    }
    return {
        options: options,
        id: constants_1.STEAM_PROVIDER_ID,
        name: constants_1.STEAM_PROVIDER_NAME,
        type: 'oauth',
        style: {
            logo: constants_1.STEAM_LOGO_URL,
            logoDark: constants_1.STEAM_LOGO_URL,
            bg: '#000',
            text: '#fff',
            bgDark: '#000',
            textDark: '#fff'
        },
        idToken: false,
        checks: ['none'],
        clientId: constants_1.STEAM_PROVIDER_ID,
        authorization: {
            url: constants_1.STEAM_AUTHORIZATION_URL,
            params: {
                'openid.mode': 'checkid_setup',
                'openid.ns': 'http://specs.openid.net/auth/2.0',
                'openid.identity': 'http://specs.openid.net/auth/2.0/identifier_select',
                'openid.claimed_id': 'http://specs.openid.net/auth/2.0/identifier_select',
                'openid.return_to': returnTo,
                'openid.realm': realm
            }
        },
        token: {
            async request() {
                if (!request.url) {
                    throw new Error('No URL found in request object');
                }
                const identity = await (0, openid_1.claimIdentity)(request, realm, returnTo);
                return {
                    tokens: new openid_client_1.TokenSet({
                        id_token: (0, node_crypto_1.randomUUID)(),
                        access_token: (0, node_crypto_1.randomUUID)(),
                        steamId: identity
                    })
                };
            }
        },
        userinfo: {
            async request(ctx) {
                const base = ctx.provider.resolveEndpoint ??
                    'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002';
                const url = new URL(base);
                url.searchParams.set('steamids', ctx.tokens.steamId);
                if (base.startsWith('https://api.steampowered.com')) {
                    url.searchParams.set('key', ctx.provider.clientSecret);
                }
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error(`Steam profile fetch failed with status ${res.status}`);
                }
                const data = await res.json();
                return data.response.players[0];
            }
        },
        profile(profile) {
            // Next.js cannot serialize the session if email is missing or null, so user ID with pseudo email domain is specified instead.
            return {
                id: profile.steamid,
                image: profile.avatarfull,
                email: `${profile.steamid}@${constants_1.STEAM_EMAIL_PSEUDO_DOMAIN}`,
                name: profile.personaname
            };
        }
    };
}

import type { NextApiRequest } from 'next';
import type { OAuthConfig, OAuthUserConfig } from 'next-auth/providers';
import type { NextRequest } from 'next/server';
import { type CommunityVisibilityState, type PersonaState } from './constants';
export interface SteamProfile extends Record<string, any> {
    steamid: string;
    personaname: string;
    profileurl: string;
    avatar: string;
    avatarmedium: string;
    avatarfull: string;
    avatarhash: string;
    communityvisibilitystate?: CommunityVisibilityState;
    profilestate?: number;
    lastlogoff?: number;
    personastate?: PersonaState;
    primaryclanid?: string;
    timecreated?: number;
    personastateflags?: number;
    commentpermission?: boolean;
    loccountrycode?: string;
    locstatecode?: string;
    loccityid?: number;
}
export interface SteamProviderOptions<P> extends Omit<OAuthUserConfig<P>, 'clientId' | 'clientSecret'> {
    /**
     * Obtain the key here: [Obtaining Steam Web API Key](https://steamcommunity.com/dev/apikey)
     */
    clientSecret?: string;
    /**
     * If `callbackUrl` is not provided, the default value from `process.env.NEXTAUTH_URL` is computed and used.
     * **Trailing slash must be removed**.
     *
     * @example 'https://example.com/api/auth/callback'
     */
    callbackUrl?: string;
    resolveEndpoint?: string;
}
export declare function Steam<P extends SteamProfile>(request: Request | NextRequest | NextApiRequest, options: SteamProviderOptions<P>): OAuthConfig<SteamProfile>;

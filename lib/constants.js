"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaState = exports.CommunityVisibilityState = exports.LOGO_URL = exports.AUTHORIZATION_URL = exports.EMAIL_DOMAIN = exports.PROVIDER_NAME = exports.PROVIDER_ID = exports.STEAM_LOGO_URL = exports.STEAM_AUTHORIZATION_URL = exports.STEAM_EMAIL_PSEUDO_DOMAIN = exports.STEAM_PROVIDER_NAME = exports.STEAM_PROVIDER_ID = void 0;
exports.STEAM_PROVIDER_ID = 'steam';
exports.STEAM_PROVIDER_NAME = 'Steam';
exports.STEAM_EMAIL_PSEUDO_DOMAIN = 'steamcommunity.com';
exports.STEAM_AUTHORIZATION_URL = 'https://steamcommunity.com/openid/login';
exports.STEAM_LOGO_URL = 'https://raw.githubusercontent.com/Nekonyx/next-auth-steam/fcc97d9d5ae40b0b9c3e98efb6eda1058d571716/logo/steam-icon.svg';
/** @deprecated Use `STEAM_PROVIDER_ID` instead */
exports.PROVIDER_ID = exports.STEAM_PROVIDER_ID;
/** @deprecated Use `STEAM_PROVIDER_NAME` instead */
exports.PROVIDER_NAME = exports.STEAM_PROVIDER_NAME;
/** @deprecated Use `STEAM_EMAIL_PSEUDO_DOMAIN` instead */
exports.EMAIL_DOMAIN = exports.STEAM_EMAIL_PSEUDO_DOMAIN;
/** @deprecated Use `STEAM_AUTHORIZATION_URL` instead */
exports.AUTHORIZATION_URL = 'https://steamcommunity.com/openid/login';
/** @deprecated Use `STEAM_LOGO_URL` instead */
exports.LOGO_URL = exports.STEAM_LOGO_URL;
var CommunityVisibilityState;
(function (CommunityVisibilityState) {
    CommunityVisibilityState[CommunityVisibilityState["Private"] = 1] = "Private";
    CommunityVisibilityState[CommunityVisibilityState["Public"] = 3] = "Public";
})(CommunityVisibilityState || (exports.CommunityVisibilityState = CommunityVisibilityState = {}));
var PersonaState;
(function (PersonaState) {
    PersonaState[PersonaState["Offline"] = 0] = "Offline";
    PersonaState[PersonaState["Online"] = 1] = "Online";
    PersonaState[PersonaState["Busy"] = 2] = "Busy";
    PersonaState[PersonaState["Away"] = 3] = "Away";
    PersonaState[PersonaState["Snooze"] = 4] = "Snooze";
    PersonaState[PersonaState["LookingToTrade"] = 5] = "LookingToTrade";
    PersonaState[PersonaState["LookingToPlay"] = 6] = "LookingToPlay";
})(PersonaState || (exports.PersonaState = PersonaState = {}));

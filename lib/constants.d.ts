export declare const STEAM_PROVIDER_ID = "steam";
export declare const STEAM_PROVIDER_NAME = "Steam";
export declare const STEAM_EMAIL_PSEUDO_DOMAIN = "steamcommunity.com";
export declare const STEAM_AUTHORIZATION_URL = "https://steamcommunity.com/openid/login";
export declare const STEAM_LOGO_URL = "https://raw.githubusercontent.com/Nekonyx/next-auth-steam/fcc97d9d5ae40b0b9c3e98efb6eda1058d571716/logo/steam-icon.svg";
/** @deprecated Use `STEAM_PROVIDER_ID` instead */
export declare const PROVIDER_ID = "steam";
/** @deprecated Use `STEAM_PROVIDER_NAME` instead */
export declare const PROVIDER_NAME = "Steam";
/** @deprecated Use `STEAM_EMAIL_PSEUDO_DOMAIN` instead */
export declare const EMAIL_DOMAIN = "steamcommunity.com";
/** @deprecated Use `STEAM_AUTHORIZATION_URL` instead */
export declare const AUTHORIZATION_URL = "https://steamcommunity.com/openid/login";
/** @deprecated Use `STEAM_LOGO_URL` instead */
export declare const LOGO_URL = "https://raw.githubusercontent.com/Nekonyx/next-auth-steam/fcc97d9d5ae40b0b9c3e98efb6eda1058d571716/logo/steam-icon.svg";
export declare enum CommunityVisibilityState {
    Private = 1,
    Public = 3
}
export declare enum PersonaState {
    Offline = 0,
    Online = 1,
    Busy = 2,
    Away = 3,
    Snooze = 4,
    LookingToTrade = 5,
    LookingToPlay = 6
}

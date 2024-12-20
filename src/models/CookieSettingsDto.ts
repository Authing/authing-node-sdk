/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CookieSettingsDto = {
    /**
     * Cookie validity time: The validity time of the user's login status (default is 1209600 seconds / 14 days). After expiration, the user needs to log in again. For app panels and apps that have been added to the app panel, this cookie expiration time will be used.
     */
    cookieExpiresIn: number;
    /**
     * Cookie expiration time is based on the browser session: it expires immediately after the current browser is closed, and you need to log in again next time you open it.
     */
    cookieExpiresOnBrowserSession: boolean;
};

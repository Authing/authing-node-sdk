/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExchangeTokenSetWithQRcodeTicketDto = {
    /**
     * Returned when the QR code status is authorized. If "Web polling interface returns complete user information" is not turned on in the console application security - general security - login security - APP scan code to log in to web security (it is turned off by default), this ticket will be returned in exchange for a complete user information.
     */
    ticket: string;
    /**
     * Application ID. It needs to be passed when the application's "token exchange authentication method" is configured as `client_secret_post`.
     */
    client_id?: string;
    /**
     * Application key. It needs to be passed when the application's "token exchange authentication method" is configured as `client_secret_post`.
     */
    client_secret?: string;
};

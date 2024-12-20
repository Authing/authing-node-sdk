/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 *
 * This interface is used to generate links bound to external identity sources, and can guide users to jump after generation.
 *
 */
export type GenerateLinkExtidpUrlDto = {
    /**
     * Unique identifier for external identity source connection
     */
    extIdpConnIdentifier?: any;
    /**
     * Authing application ID
     */
    appId?: any;
    /**
     * User's id_token
     */
    idToken?: any;
    /**
     * Whether to use URL redirection to return binding information
     */
    needUrlRedirect?: any;
    /**
     * When using URL redirection to return binding information, whether to return only token information, pass in this parameter, because some browsers will limit the length of the URL
     */
    onlyRedirectToken?: any;
    /**
     * Whether to use form post to return binding information
     */
    needFormPost?: any;
    /**
     * When using URL redirection or form post to return binding information, the URL to receive the information
     */
    targetUrl?: any;
};

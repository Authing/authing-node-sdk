/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationBrandingConfig } from './ApplicationBrandingConfig';
import type { ApplicationLoginConfigDto } from './ApplicationLoginConfigDto';
import type { ApplicationRegisterConfig } from './ApplicationRegisterConfig';
import type { CasIdPConfig } from './CasIdPConfig';
import type { OauthIdpConfig } from './OauthIdpConfig';
import type { OIDCConfig } from './OIDCConfig';
import type { SamlIdpConfig } from './SamlIdpConfig';

export type CreateApplicationRespDataDto = {
    /**
     * Application ID
     */
    appId: string;
    /**
     * Apply unique identifier
     */
    appIdentifier: string;
    /**
     * Application name
     */
    appName: string;
    /**
     *App Logo link
     */
    appLogo: string;
    /**
     * Application description information
     */
    appDescription?: string;
    /**
     *Application type
     */
    appType: CreateApplicationRespDataDto.appType;
    /**
     * User pool ID
     */
    userPoolId: string;
    /**
     * Whether it is an integrated application
     */
    isIntegrateApp: boolean;
    /**
     *Default application protocol type
     */
    defaultProtocol: CreateApplicationRespDataDto.defaultProtocol;
    /**
     * Application login callback address
     */
    redirectUris: Array<string>;
    /**
     * Application logout callback address
     */
    logoutRedirectUris: Array<string>;
    /**
     * Initiate login address: When you click "Experience Login" in the Authing application details or click the application icon in the application panel, you will be redirected to this URL, which defaults to the Authing login page.
     */
    initLoginUri: string;
    /**
     * Whether to enable SSO single sign-on
     */
    ssoEnabled: boolean;
    /**
     * Time to enable SSO single sign-on
     */
    ssoEnabledAt?: string;
    /**
     * Login configuration
     */
    loginConfig: ApplicationLoginConfigDto;
    /**
     *Registration configuration
     */
    registerConfig: ApplicationRegisterConfig;
    /**
     * Branding configuration
     */
    brandingConfig: ApplicationBrandingConfig;
    /**
     * OIDC protocol configuration
     */
    oidcConfig: OIDCConfig;
    /**
     * Whether to enable SAML identity provider
     */
    samlProviderEnabled: boolean;
    /**
     * SAML protocol configuration
     */
    samlConfig?: SamlIdpConfig;
    /**
     * Whether to enable the OAuth identity provider
     */
    oauthProviderEnabled: boolean;
    /**
     * OAuth2.0 protocol configuration
     */
    oauthConfig?: OauthIdpConfig;
    /**
     * Whether to enable CAS identity provider
     */
    casProviderEnabled: boolean;
    /**
     * CAS protocol configuration
     */
    casConfig?: CasIdPConfig;
    /**
     * Whether to customize the login box of this application, the default is to use the global login box configuration.
     */
    customBrandingEnabled: boolean;
    /**
     * Whether to customize the security rules of this application, the global security configuration will be adopted by default.
     */
    customSecurityEnabled: boolean;
    /**
     * Template types for integrated applications
     */
    template?: string;
};

export namespace CreateApplicationRespDataDto {

    /**
     *Application type
     */
    export enum appType {
        WEB = 'web',
        SPA = 'spa',
        NATIVE = 'native',
        API = 'api',
        MFA = 'mfa',
        MINI_PROGRAM = 'mini-program',
        GATEWAY_APP = 'gateway-app',
        GATEWAY_AGENT = 'gateway-agent',
    }

    /**
     *Default application protocol type
     */
    export enum defaultProtocol {
        OIDC = 'oidc',
        OAUTH = 'oauth',
        SAML = 'saml',
        CAS = 'cas',
        ASA = 'asa',
    }


}

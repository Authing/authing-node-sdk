/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationBrandingConfigInputDto } from './ApplicationBrandingConfigInputDto';
import type { ApplicationLoginConfigInputDto } from './ApplicationLoginConfigInputDto';
import type { ApplicationRegisterConfigInputDto } from './ApplicationRegisterConfigInputDto';
import type { CasIdPConfig } from './CasIdPConfig';
import type { OauthIdpConfig } from './OauthIdpConfig';
import type { OIDCConfig } from './OIDCConfig';
import type { SamlIdpConfig } from './SamlIdpConfig';

export type CreateApplicationDto = {
    /**
     * Application name
     */
    appName: string;
    /**
     * Integrated application template type, **Integrated application required**. Integrated applications only need to fill in the two fields `template` and `templateData`, and other fields will be ignored.
     */
    template?: string;
    /**
     * Integrated application configuration information, **Integrated application required**.
     */
    templateData?: any;
    /**
     * The unique identifier of the application, **required for self-built applications**.
     */
    appIdentifier?: string;
    /**
     *App Logo link
     */
    appLogo?: string;
    /**
     * Application description information
     */
    appDescription?: string;
    /**
     *Application type
     */
    appType?: CreateApplicationDto.appType;
    /**
     *Default application protocol type
     */
    defaultProtocol?: CreateApplicationDto.defaultProtocol;
    /**
     * Application login callback address
     */
    redirectUris?: Array<string>;
    /**
     * Application logout callback address
     */
    logoutRedirectUris?: Array<string>;
    /**
     * Initiate login address: When you click "Experience Login" in the Authing application details or click the application icon in the application panel, you will be redirected to this URL, which defaults to the Authing login page.
     */
    initLoginUri?: string;
    /**
     * Whether to enable SSO single sign-on
     */
    ssoEnabled?: boolean;
    /**
     * OIDC protocol configuration
     */
    oidcConfig?: OIDCConfig;
    /**
     * Whether to enable SAML identity provider
     */
    samlProviderEnabled?: boolean;
    /**
     * SAML protocol configuration
     */
    samlConfig?: SamlIdpConfig;
    /**
     * Whether to enable the OAuth identity provider
     */
    oauthProviderEnabled?: boolean;
    /**
     * OAuth2.0 protocol configuration. [Important note] OAuth2.0 is no longer recommended and it is recommended to switch to OIDC.
     */
    oauthConfig?: OauthIdpConfig;
    /**
     * Whether to enable CAS identity provider
     */
    casProviderEnabled?: boolean;
    /**
     * CAS protocol configuration
     */
    casConfig?: CasIdPConfig;
    /**
     * Login configuration
     */
    loginConfig?: ApplicationLoginConfigInputDto;
    /**
     *Registration configuration
     */
    registerConfig?: ApplicationRegisterConfigInputDto;
    /**
     * Branding configuration
     */
    brandingConfig?: ApplicationBrandingConfigInputDto;
};

export namespace CreateApplicationDto {

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

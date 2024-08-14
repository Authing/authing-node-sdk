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
     * 应用 ID
     */
    appId: string;
    /**
     * 应用唯一标志
     */
    appIdentifier: string;
    /**
     * 应用名称
     */
    appName: string;
    /**
     * 应用 Logo 链接
     */
    appLogo: string;
    /**
     * 应用描述信息
     */
    appDescription?: string;
    /**
     * 应用类型
     */
    appType: CreateApplicationRespDataDto.appType;
    /**
     * 用户池 ID
     */
    userPoolId: string;
    /**
     * 是否为集成应用
     */
    isIntegrateApp: boolean;
    /**
     * 默认应用协议类型
     */
    defaultProtocol: CreateApplicationRespDataDto.defaultProtocol;
    /**
     * 应用登录回调地址
     */
    redirectUris: Array<string>;
    /**
     * 应用退出登录回调地址
     */
    logoutRedirectUris: Array<string>;
    /**
     * 发起登录地址：在 Authing 应用详情点击「体验登录」或在应用面板点击该应用图标时，会跳转到此 URL，默认为 Authing 登录页。
     */
    initLoginUri: string;
    /**
     * 是否开启 SSO 单点登录
     */
    ssoEnabled: boolean;
    /**
     * 开启 SSO 单点登录的时间
     */
    ssoEnabledAt?: string;
    /**
     * 登录配置
     */
    loginConfig: ApplicationLoginConfigDto;
    /**
     * 注册配置
     */
    registerConfig: ApplicationRegisterConfig;
    /**
     * 品牌化配置
     */
    brandingConfig: ApplicationBrandingConfig;
    /**
     * OIDC 协议配置
     */
    oidcConfig: OIDCConfig;
    /**
     * 是否开启 SAML 身份提供商
     */
    samlProviderEnabled: boolean;
    /**
     * SAML 协议配置
     */
    samlConfig?: SamlIdpConfig;
    /**
     * 是否开启 OAuth 身份提供商
     */
    oauthProviderEnabled: boolean;
    /**
     * OAuth2.0 协议配置
     */
    oauthConfig?: OauthIdpConfig;
    /**
     * 是否开启 CAS 身份提供商
     */
    casProviderEnabled: boolean;
    /**
     * CAS 协议配置
     */
    casConfig?: CasIdPConfig;
    /**
     * 是否自定义本应用的登录框，默认走全局的登录框配置。
     */
    customBrandingEnabled: boolean;
    /**
     * 是否自定义本应用的安全规则，默认走全局的安全配置。
     */
    customSecurityEnabled: boolean;
    /**
     * 集成应用的模版类型
     */
    template?: string;
};

export namespace CreateApplicationRespDataDto {

    /**
     * 应用类型
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
     * 默认应用协议类型
     */
    export enum defaultProtocol {
        OIDC = 'oidc',
        OAUTH = 'oauth',
        SAML = 'saml',
        CAS = 'cas',
        ASA = 'asa',
    }


}

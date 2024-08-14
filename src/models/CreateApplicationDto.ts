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
     * 应用名称
     */
    appName: string;
    /**
     * 集成应用模版类型，**集成应用必填**。集成应用只需要填 `template` 和 `templateData` 两个字段，其他的字段将被忽略。
     */
    template?: string;
    /**
     * 集成应用配置信息，**集成应用必填**。
     */
    templateData?: any;
    /**
     * 应用唯一标志，**自建应用必填**。
     */
    appIdentifier?: string;
    /**
     * 应用 Logo 链接
     */
    appLogo?: string;
    /**
     * 应用描述信息
     */
    appDescription?: string;
    /**
     * 应用类型
     */
    appType?: CreateApplicationDto.appType;
    /**
     * 默认应用协议类型
     */
    defaultProtocol?: CreateApplicationDto.defaultProtocol;
    /**
     * 应用登录回调地址
     */
    redirectUris?: Array<string>;
    /**
     * 应用退出登录回调地址
     */
    logoutRedirectUris?: Array<string>;
    /**
     * 发起登录地址：在 Authing 应用详情点击「体验登录」或在应用面板点击该应用图标时，会跳转到此 URL，默认为 Authing 登录页。
     */
    initLoginUri?: string;
    /**
     * 是否开启 SSO 单点登录
     */
    ssoEnabled?: boolean;
    /**
     * OIDC 协议配置
     */
    oidcConfig?: OIDCConfig;
    /**
     * 是否开启 SAML 身份提供商
     */
    samlProviderEnabled?: boolean;
    /**
     * SAML 协议配置
     */
    samlConfig?: SamlIdpConfig;
    /**
     * 是否开启 OAuth 身份提供商
     */
    oauthProviderEnabled?: boolean;
    /**
     * OAuth2.0 协议配置。【重要提示】不再推荐使用 OAuth2.0，建议切换到 OIDC。
     */
    oauthConfig?: OauthIdpConfig;
    /**
     * 是否开启 CAS 身份提供商
     */
    casProviderEnabled?: boolean;
    /**
     * CAS 协议配置
     */
    casConfig?: CasIdPConfig;
    /**
     * 登录配置
     */
    loginConfig?: ApplicationLoginConfigInputDto;
    /**
     * 注册配置
     */
    registerConfig?: ApplicationRegisterConfigInputDto;
    /**
     * 品牌化配置
     */
    brandingConfig?: ApplicationBrandingConfigInputDto;
};

export namespace CreateApplicationDto {

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

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationBrandingConfigInputDto } from './ApplicationBrandingConfigInputDto';
import type { ApplicationRegisterConfigInputDto } from './ApplicationRegisterConfigInputDto';
import type { CasIdPConfig } from './CasIdPConfig';
import type { OauthIdpConfig } from './OauthIdpConfig';
import type { OIDCConfig } from './OIDCConfig';
import type { SamlIdpConfig } from './SamlIdpConfig';
import type { UpdateApplicationLoginConfigInputDto } from './UpdateApplicationLoginConfigInputDto';

export type UpdateApplicationDto = {
    /**
     * 应用 ID
     */
    appId: string;
    /**
     * 应用名称
     */
    appName?: string;
    /**
     * 集成应用配置信息
     */
    templateData?: any;
    /**
     * 应用唯一标志
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
     * 默认应用协议类型
     */
    defaultProtocol?: UpdateApplicationDto.defaultProtocol;
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
    loginConfig?: UpdateApplicationLoginConfigInputDto;
    /**
     * 注册配置
     */
    registerConfig?: ApplicationRegisterConfigInputDto;
    /**
     * 品牌化配置
     */
    brandingConfig?: ApplicationBrandingConfigInputDto;
    /**
     * 未授权用户是否可以在应用面板中看到该应用
     */
    ssoShowLaunchpad?: boolean;
    /**
     * 是否开启可申请权限，另外应用必须开启 SSO 单点登录和未授权用户可以在应用面板中看到该应用配置
     */
    enablePermissionApply?: boolean;
};

export namespace UpdateApplicationDto {

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

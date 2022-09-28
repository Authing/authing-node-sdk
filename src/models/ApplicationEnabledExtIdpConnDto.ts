/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApplicationEnabledExtIdpConnDto = {
    /**
     * 是否为社会化登录身份源连接
     */
    isSocial: boolean;
    /**
     * 身份源 ID
     */
    extIdpId: string;
    /**
     * 身份源类型
     */
    extIdpType: ApplicationEnabledExtIdpConnDto.extIdpType;
    /**
     * 身份源连接 ID
     */
    extIdpConnId: string;
    /**
     * 身份源连接类型
     */
    extIdpConnType: ApplicationEnabledExtIdpConnDto.extIdpConnType;
    /**
     * 身份源连接可读唯一标志
     */
    extIdpConnIdentifier: string;
    /**
     * 微信
     */
    extIdpConnDisplayName: string;
    /**
     * 身份源连接 Logo
     */
    extIdpConnLogo: string;
};

export namespace ApplicationEnabledExtIdpConnDto {

    /**
     * 身份源类型
     */
    export enum extIdpType {
        OIDC = 'oidc',
        OAUTH2 = 'oauth2',
        SAML = 'saml',
        LDAP = 'ldap',
        AD = 'ad',
        CAS = 'cas',
        AZURE_AD = 'azure-ad',
        WECHAT = 'wechat',
        GOOGLE = 'google',
        QQ = 'qq',
        WECHATWORK = 'wechatwork',
        DINGTALK = 'dingtalk',
        WEIBO = 'weibo',
        GITHUB = 'github',
        ALIPAY = 'alipay',
        APPLE = 'apple',
        BAIDU = 'baidu',
        LARK = 'lark',
        GITLAB = 'gitlab',
        TWITTER = 'twitter',
        FACEBOOK = 'facebook',
        SLACK = 'slack',
        LINKEDIN = 'linkedin',
        YIDUN = 'yidun',
        QINGCLOUD = 'qingcloud',
        GITEE = 'gitee',
        INSTAGRAM = 'instagram',
        WELINK = 'welink',
    }

    /**
     * 身份源连接类型
     */
    export enum extIdpConnType {
        OIDC = 'oidc',
        OAUTH = 'oauth',
        SAML = 'saml',
        LDAP = 'ldap',
        AD = 'ad',
        CAS = 'cas',
        AZURE_AD = 'azure-ad',
        ALIPAY = 'alipay',
        FACEBOOK = 'facebook',
        TWITTER = 'twitter',
        GOOGLE_MOBILE = 'google:mobile',
        GOOGLE = 'google',
        WECHAT_PC = 'wechat:pc',
        WECHAT_MOBILE = 'wechat:mobile',
        WECHAT_WEBPAGE_AUTHORIZATION = 'wechat:webpage-authorization',
        WECHATMP_QRCODE = 'wechatmp-qrcode',
        WECHAT_MINIPROGRAM_DEFAULT = 'wechat:miniprogram:default',
        WECHAT_MINIPROGRAM_QRCONNECT = 'wechat:miniprogram:qrconnect',
        WECHAT_MINIPROGRAM_APP_LAUNCH = 'wechat:miniprogram:app-launch',
        GITHUB = 'github',
        QQ = 'qq',
        WECHATWORK_CORP_QRCONNECT = 'wechatwork:corp:qrconnect',
        WECHATWORK_AGENCY_QRCONNECT = 'wechatwork:agency:qrconnect',
        WECHATWORK_SERVICE_PROVIDER_QRCONNECT = 'wechatwork:service-provider:qrconnect',
        WECHATWORK_MOBILE = 'wechatwork:mobile',
        WECHATWORK_AGENCY_MOBILE = 'wechatwork:agency:mobile',
        DINGTALK = 'dingtalk',
        DINGTALK_PROVIDER = 'dingtalk:provider',
        WEIBO = 'weibo',
        APPLE = 'apple',
        APPLE_WEB = 'apple:web',
        BAIDU = 'baidu',
        LARK_INTERNAL = 'lark-internal',
        LARK_PUBLIC = 'lark-public',
        GITLAB = 'gitlab',
        LINKEDIN = 'linkedin',
        SLACK = 'slack',
        YIDUN = 'yidun',
        QINGCLOUD = 'qingcloud',
        GITEE = 'gitee',
        INSTAGRAM = 'instagram',
        WELINK = 'welink',
        AD_KERBEROS = 'ad-kerberos',
    }


}

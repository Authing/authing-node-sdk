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
    /**
     * 是否允许身份源连接
     */
    enabled?: boolean;
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
        HUAWEI = 'huawei',
        HONOR = 'honor',
        XIAOMI = 'xiaomi',
        OPPO = 'oppo',
        AWS = 'aws',
        AMAZON = 'amazon',
        DOUYIN = 'douyin',
        KUAISHOU = 'kuaishou',
        LINE = 'line',
        SDBZ = 'sdbz',
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
        FACEBOOK_MOBILE = 'facebook:mobile',
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
        GITHUB_MOBILE = 'github:mobile',
        QQ = 'qq',
        QQ_MOBILE = 'qq:mobile',
        WECHATWORK_CORP_QRCONNECT = 'wechatwork:corp:qrconnect',
        WECHATWORK_AGENCY_QRCONNECT = 'wechatwork:agency:qrconnect',
        WECHATWORK_SERVICE_PROVIDER_QRCONNECT = 'wechatwork:service-provider:qrconnect',
        WECHATWORK_MOBILE = 'wechatwork:mobile',
        WECHATWORK_AGENCY_MOBILE = 'wechatwork:agency:mobile',
        DINGTALK = 'dingtalk',
        DINGTALK_MOBILE = 'dingtalk:mobile',
        DINGTALK_PROVIDER = 'dingtalk:provider',
        WEIBO = 'weibo',
        WEIBO_MOBILE = 'weibo:mobile',
        APPLE = 'apple',
        APPLE_WEB = 'apple:web',
        BAIDU = 'baidu',
        BAIDU_MOBILE = 'baidu:mobile',
        LARK_INTERNAL = 'lark-internal',
        LARK_PUBLIC = 'lark-public',
        LARK_BLOCK = 'lark-block',
        GITLAB = 'gitlab',
        GITLAB_MOBILE = 'gitlab:mobile',
        LINKEDIN = 'linkedin',
        LINKEDIN_MOBILE = 'linkedin:mobile',
        SLACK = 'slack',
        SLACK_MOBILE = 'slack:mobile',
        YIDUN = 'yidun',
        QINGCLOUD = 'qingcloud',
        GITEE = 'gitee',
        GITEE_MOBILE = 'gitee:mobile',
        INSTAGRAM = 'instagram',
        WELINK = 'welink',
        AD_KERBEROS = 'ad-kerberos',
        HUAWEI = 'huawei',
        HUAWEI_MOBILE = 'huawei:mobile',
        HONOR = 'honor',
        XIAOMI = 'xiaomi',
        XIAOMI_MOBILE = 'xiaomi:mobile',
        AWS = 'aws',
        AMAZON = 'amazon',
        AMAZON_MOBILE = 'amazon:mobile',
        DOUYIN_MOBILE = 'douyin:mobile',
        KUAISHOU_MOBILE = 'kuaishou:mobile',
        LINE_MOBILE = 'line:mobile',
        OPPO_MOBILE = 'oppo:mobile',
        WECHATWORK_QRCONNECT_OF_AUTHING_AGENCY = 'wechatwork:qrconnect:of:authing:agency',
        SDBZ = 'sdbz',
    }


}

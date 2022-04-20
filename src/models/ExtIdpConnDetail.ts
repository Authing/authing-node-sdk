/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExtIdpConnDetail = {
    /**
     * 身份源连接 id
     */
    id: string;
    /**
     * 身份源连接类型
     */
    type: ExtIdpConnDetail.type;
    /**
     * 身份源图标
     */
    logo: string;
    /**
     * 连接标识
     */
    identifier?: string;
    /**
     * 连接在登录页的显示名称
     */
    displayName?: string;
    /**
     * 只支持登录
     */
    loginOnly: boolean;
    /**
     * 关联模式
     */
    associationMode: ExtIdpConnDetail.associationMode;
    /**
     * 绑定方式
     */
    challengeBindingMethods: Array<'email-password' | 'username-password' | 'phone-password' | 'phone-code' | 'email-code'>;
    /**
     * 自定义参数
     */
    fields: any;
};

export namespace ExtIdpConnDetail {

    /**
     * 身份源连接类型
     */
    export enum type {
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
    }

    /**
     * 关联模式
     */
    export enum associationMode {
        NONE = 'none',
        FIELD = 'field',
        CHALLENGE = 'challenge',
    }


}

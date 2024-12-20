/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateExtIdpDto = {
    /**
     * Identity source name
     */
    name: string;
    /**
     * Identity source connection type
     */
    type: CreateExtIdpDto.type;
    /**
     * Tenant ID
     */
    tenantId?: string;
};

export namespace CreateExtIdpDto {

    /**
     * Identity source connection type
     */
    export enum type {
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
        ZJZWFW = 'zjzwfw',
        ZZDING = 'zzding',
        SEEYONA8V5 = 'seeyona8v5',
    }


}

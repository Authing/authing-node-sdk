/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExtIdpInfoDto = {
    /**
     * Identity source connection unique identifier
     */
    identifier: string;
    /**
     * Identity source ID
     */
    extIdpId: string;
    /**
     * Identity source type
     */
    type: ExtIdpInfoDto.type;
    /**
     *Authentication type
     */
    extIdpType: ExtIdpInfoDto.extIdpType;
    /**
     * Certification address
     */
    bindUrl: string;
    /**
     * Identity source display name
     */
    name: string;
    /**
     * Identity source display name (English)
     */
    name_en?: string;
    /**
     * describe
     */
    desc?: string;
    /**
     *Description in English
     */
    desc_en?: string;
    /**
     * icon
     */
    logo?: string;
};

export namespace ExtIdpInfoDto {

    /**
     * Identity source type
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

    /**
     *Authentication type
     */
    export enum extIdpType {
        SOCIAL = 'social',
        ENTERPRISE = 'enterprise',
    }


}

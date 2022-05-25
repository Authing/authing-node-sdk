/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateExtIdpDto = {
    /**
     * 身份源连接类型
     */
    type: CreateExtIdpDto.type;
    /**
     * 身份源名称
     */
    name: string;
    /**
     * 租户 ID
     */
    tenantId?: string;
};

export namespace CreateExtIdpDto {

    /**
     * 身份源连接类型
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
    }


}

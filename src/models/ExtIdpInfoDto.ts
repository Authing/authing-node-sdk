/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExtIdpInfoDto = {
    /**
     * 身份源连接唯一标志
     */
    identifier: string;
    /**
     * 身份源 ID
     */
    extIdpId: string;
    /**
     * 身份源类型
     */
    type: ExtIdpInfoDto.type;
    /**
     * 认证类型
     */
    extIdpType: ExtIdpInfoDto.extIdpType;
    /**
     * 认证地址
     */
    bindUrl: string;
    /**
     * 身份源显示名称
     */
    name: string;
    /**
     * 身份源显示名称（英文）
     */
    name_en?: string;
    /**
     * 描述
     */
    desc?: string;
    /**
     * 描述英文
     */
    desc_en?: string;
    /**
     * 图标
     */
    logo?: string;
};

export namespace ExtIdpInfoDto {

    /**
     * 身份源类型
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
    }

    /**
     * 认证类型
     */
    export enum extIdpType {
        SOCIAL = 'social',
        ENTERPRISE = 'enterprise',
    }


}

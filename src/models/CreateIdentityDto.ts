/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateIdentityDto = {
    /**
     * Identity source connection ID
     */
    extIdpId: string;
    /**
     * External identity source type:
     * - `wechat`: WeChat
     * - `qq`: QQ
     * - `wechatwork`: Enterprise WeChat
     * - `dingtalk`: DingTalk
     * - `weibo`: Weibo
     * - `github`: GitHub
     * - `alipay`: Alipay
     * - `baidu`: Baidu
     * - `lark`: Feishu
     * - `welink`: Welink
     * - `yidun`: NetEase Yidun
     * - `qingcloud`: Qingyun
     * - `google`: Google
     * - `gitlab`: GitLab
     * - `gitee`: Gitee
     * - `twitter`: Twitter
     * - `facebook`: Facebook
     * - `slack`: Slack
     * - `linkedin`: Linkedin
     * - `instagram`: Instagram
     * - `oidc`: OIDC type enterprise identity source
     * - `oauth2`: OAuth2-style enterprise identity source
     * - `saml`: SAML-style enterprise identity source
     * - `ldap`: LDAP-based enterprise identity source
     * - `ad`: AD type enterprise identity source
     * - `cas`: CAS type enterprise identity source
     * - `azure-ad`: Azure AD-style enterprise identity source
     *
     */
    provider: CreateIdentityDto.provider;
    /**
     * Identity type, such as unionid, openid, primary
     */
    type: string;
    /**
     * ID in external identity source
     */
    userIdInIdp: string;
    /**
     * User's identity information in idp
     */
    userInfoInIdp: any;
    /**
     * Access Token in the external identity source (this parameter will only be returned when the user actively obtains it, and will not be returned by the management-side interface).
     */
    accessToken?: string;
    /**
     * Refresh Token in the external identity source (this parameter will only be returned when the user actively obtains it, and will not be returned by the management-side interface).
     */
    refreshToken?: string;
    /**
     * List of identity source connection IDs that the identity comes from
     */
    originConnIds: Array<string>;
};

export namespace CreateIdentityDto {

    /**
     * External identity source type:
     * - `wechat`: WeChat
     * - `qq`: QQ
     * - `wechatwork`: Enterprise WeChat
     * - `dingtalk`: DingTalk
     * - `weibo`: Weibo
     * - `github`: GitHub
     * - `alipay`: Alipay
     * - `baidu`: Baidu
     * - `lark`: Feishu
     * - `welink`: Welink
     * - `yidun`: NetEase Yidun
     * - `qingcloud`: Qingyun
     * - `google`: Google
     * - `gitlab`: GitLab
     * - `gitee`: Gitee
     * - `twitter`: Twitter
     * - `facebook`: Facebook
     * - `slack`: Slack
     * - `linkedin`: Linkedin
     * - `instagram`: Instagram
     * - `oidc`: OIDC type enterprise identity source
     * - `oauth2`: OAuth2-style enterprise identity source
     * - `saml`: SAML-style enterprise identity source
     * - `ldap`: LDAP-based enterprise identity source
     * - `ad`: AD type enterprise identity source
     * - `cas`: CAS type enterprise identity source
     * - `azure-ad`: Azure AD-style enterprise identity source
     *
     */
    export enum provider {
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

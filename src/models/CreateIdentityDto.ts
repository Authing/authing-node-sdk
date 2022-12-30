/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

export type CreateIdentityDto = {
    /**
     * 身份源连接 ID
     */
    extIdpId: string;
    /**
     * 外部身份源类型：
     * - `wechat`: 微信
     * - `qq`: QQ
     * - `wechatwork`: 企业微信
     * - `dingtalk`: 钉钉
     * - `weibo`: 微博
     * - `github`: GitHub
     * - `alipay`: 支付宝
     * - `baidu`: 百度
     * - `lark`: 飞书
     * - `welink`: Welink
     * - `yidun`: 网易易盾
     * - `qingcloud`: 青云
     * - `google`: Google
     * - `gitlab`: GitLab
     * - `gitee`: Gitee
     * - `twitter`: Twitter
     * - `facebook`: Facebook
     * - `slack`: Slack
     * - `linkedin`: Linkedin
     * - `instagram`: Instagram
     * - `oidc`: OIDC 型企业身份源
     * - `oauth2`: OAuth2 型企业身份源
     * - `saml`: SAML 型企业身份源
     * - `ldap`: LDAP 型企业身份源
     * - `ad`: AD 型企业身份源
     * - `cas`: CAS 型企业身份源
     * - `azure-ad`: Azure AD 型企业身份源
     *
     */
    provider: CreateIdentityDto.provider;
    /**
     * Identity 类型，如 unionid, openid, primary
     */
    type: string;
    /**
     * 在外部身份源中的 ID
     */
    userIdInIdp: string;
    /**
     * 用户在 idp 中的身份信息
     */
    userInfoInIdp: User;
    /**
     * 在外部身份源中的 Access Token（此参数只会在用户主动获取时返回，管理侧接口不会返回）。
     */
    accessToken?: string;
    /**
     * 在外部身份源中的 Refresh Token（此参数只会在用户主动获取时返回，管理侧接口不会返回）。
     */
    refreshToken?: string;
    /**
     * 身份来自的身份源连接 ID 列表
     */
    originConnIds: Array<string>;
};

export namespace CreateIdentityDto {

    /**
     * 外部身份源类型：
     * - `wechat`: 微信
     * - `qq`: QQ
     * - `wechatwork`: 企业微信
     * - `dingtalk`: 钉钉
     * - `weibo`: 微博
     * - `github`: GitHub
     * - `alipay`: 支付宝
     * - `baidu`: 百度
     * - `lark`: 飞书
     * - `welink`: Welink
     * - `yidun`: 网易易盾
     * - `qingcloud`: 青云
     * - `google`: Google
     * - `gitlab`: GitLab
     * - `gitee`: Gitee
     * - `twitter`: Twitter
     * - `facebook`: Facebook
     * - `slack`: Slack
     * - `linkedin`: Linkedin
     * - `instagram`: Instagram
     * - `oidc`: OIDC 型企业身份源
     * - `oauth2`: OAuth2 型企业身份源
     * - `saml`: SAML 型企业身份源
     * - `ldap`: LDAP 型企业身份源
     * - `ad`: AD 型企业身份源
     * - `cas`: CAS 型企业身份源
     * - `azure-ad`: Azure AD 型企业身份源
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
    }


}

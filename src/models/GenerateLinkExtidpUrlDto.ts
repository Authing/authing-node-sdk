/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 *
 * 此接口用于生成绑定外部身份源的链接，生成之后可以引导用户进行跳转。
 *
 */
export type GenerateLinkExtidpUrlDto = {
    /**
     * 外部身份源连接唯一标志
     */
    extIdpConnIdentifier?: any;
    /**
     * Authing 应用 ID
     */
    appId?: any;
    /**
     * 用户的 id_token
     */
    idToken?: any;
    /**
     * 是否使用 URL 重定向的方式返回绑定信息
     */
    needUrlRedirect?: any;
    /**
     * 当使用 URL 重定向的方式返回绑定信息时，是否只返回 token 信息，传入此参数，因为某些浏览器会限制 URL 长度
     */
    onlyRedirectToken?: any;
    /**
     * 是否使用 form post 的方式返回绑定信息
     */
    needFormPost?: any;
    /**
     * 当使用 URL 重定向或 form post 方式返回绑定信息时，接收信息的 URL
     */
    targetUrl?: any;
};

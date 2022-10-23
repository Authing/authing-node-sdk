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
};

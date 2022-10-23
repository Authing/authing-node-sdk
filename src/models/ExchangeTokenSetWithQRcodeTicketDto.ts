/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExchangeTokenSetWithQRcodeTicketDto = {
    /**
     * 当二维码状态为已授权时返回。如果在控制台应用安全 - 通用安全 - 登录安全 - APP 扫码登录 Web 安全中未开启「Web 轮询接口返回完整用户信息」（默认处于关闭状态），会返回此 ticket，用于换取完整的用户信息。
     */
    ticket: string;
    /**
     * 应用 ID。当应用的「换取 token 身份验证方式」配置为 `client_secret_post` 需要传。
     */
    client_id?: string;
    /**
     * 应用密钥。当应用的「换取 token 身份验证方式」配置为 `client_secret_post` 需要传。
     */
    client_secret?: string;
};

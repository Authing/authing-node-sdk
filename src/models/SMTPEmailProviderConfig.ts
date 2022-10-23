/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SMTPEmailProviderConfig = {
    /**
     * SMTP 地址
     */
    smtp_host: string;
    /**
     * SMTP 端口
     */
    smtp_port: number;
    /**
     * 用户名
     */
    sender: string;
    /**
     * 密码
     */
    senderPass: string;
    /**
     * 是否启用 SSL
     */
    secure: boolean;
};

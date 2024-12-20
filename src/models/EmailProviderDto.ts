/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AliExmailEmailProviderConfig } from './AliExmailEmailProviderConfig';
import type { SendGridEmailProviderConfig } from './SendGridEmailProviderConfig';
import type { SMTPEmailProviderConfig } from './SMTPEmailProviderConfig';
import type { TencentExmailEmailProviderConfig } from './TencentExmailEmailProviderConfig';

export type EmailProviderDto = {
    /**
     * Whether to enable it, if not enabled, Authing’s built-in email service will be used by default.
     */
    enabled: boolean;
    /**
     * Third-party email service provider type:
     * - `custom`: Custom SMTP mail service
     * - `ali`: [Ali Enterprise Email](https://www.ali-exmail.cn/Land/)
     * - `qq`: [Tencent Enterprise Email](https://work.weixin.qq.com/mail/)
     * - `sendgrid`: [SendGrid Mail Service](https://sendgrid.com/)
     *
     */
    type?: EmailProviderDto.type;
    /**
     * SMTP mail service configuration
     */
    smtpConfig?: SMTPEmailProviderConfig;
    /**
     * SendGrid email service configuration
     */
    sendGridConfig?: SendGridEmailProviderConfig;
    /**
     * Alibaba enterprise email service configuration
     */
    aliExmailConfig?: AliExmailEmailProviderConfig;
    /**
     * Tencent enterprise email service configuration
     */
    tencentExmailConfig?: TencentExmailEmailProviderConfig;
};

export namespace EmailProviderDto {

    /**
     * Third-party email service provider type:
     * - `custom`: Custom SMTP mail service
     * - `ali`: [Ali Enterprise Email](https://www.ali-exmail.cn/Land/)
     * - `qq`: [Tencent Enterprise Email](https://work.weixin.qq.com/mail/)
     * - `sendgrid`: [SendGrid Mail Service](https://sendgrid.com/)
     *
     */
    export enum type {
        ALI = 'ali',
        QQ = 'qq',
        SENDGRID = 'sendgrid',
        CUSTOM = 'custom',
    }


}

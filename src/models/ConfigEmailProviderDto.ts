/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AliExmailEmailProviderConfigInput } from './AliExmailEmailProviderConfigInput';
import type { SendGridEmailProviderConfigInput } from './SendGridEmailProviderConfigInput';
import type { SMTPEmailProviderConfigInput } from './SMTPEmailProviderConfigInput';
import type { TencentExmailEmailProviderConfigInput } from './TencentExmailEmailProviderConfigInput';

export type ConfigEmailProviderDto = {
    /**
     * Third-party email service provider type:
     * - `custom`: Custom SMTP mail service
     * - `ali`: [Ali Enterprise Email](https://www.ali-exmail.cn/Land/)
     * - `qq`: [Tencent Enterprise Email](https://work.weixin.qq.com/mail/)
     * - `sendgrid`: [SendGrid Mail Service](https://sendgrid.com/)
     *
     */
    type: ConfigEmailProviderDto.type;
    /**
     * Whether to enable it, if not enabled, Authing’s built-in email service will be used by default.
     */
    enabled: boolean;
    /**
     * SMTP mail service configuration
     */
    smtpConfig?: SMTPEmailProviderConfigInput;
    /**
     * SendGrid email service configuration
     */
    sendGridConfig?: SendGridEmailProviderConfigInput;
    /**
     * Alibaba enterprise email service configuration
     */
    aliExmailConfig?: AliExmailEmailProviderConfigInput;
    /**
     * Tencent enterprise email service configuration
     */
    tencentExmailConfig?: TencentExmailEmailProviderConfigInput;
};

export namespace ConfigEmailProviderDto {

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

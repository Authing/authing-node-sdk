/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AliExmailEmailProviderConfigInput } from './AliExmailEmailProviderConfigInput';
import type { SendGridEmailProviderConfigInput } from './SendGridEmailProviderConfigInput';
import type { SMTPEmailProviderConfigInput } from './SMTPEmailProviderConfigInput';
import type { TencentExmailEmailProviderConfigInput } from './TencentExmailEmailProviderConfigInput';

export type ConfigEmailProviderDto = {
    /**
     * 第三方邮件服务商类型:
     * - `smtp`: 标准 SMTP 邮件服务
     * - `ali`: [阿里企业邮箱](https://www.ali-exmail.cn/Land/)
     * - `tencent`: [腾讯企业邮箱](https://work.weixin.qq.com/mail/)
     * - `sendgrid`: [SendGrid 邮件服务](https://sendgrid.com/)
     *
     */
    type: ConfigEmailProviderDto.type;
    /**
     * 是否启用，如果不启用，将默认使用 Authing 内置的邮件服务
     */
    enabled: boolean;
    /**
     * SMTP 邮件服务配置
     */
    smtpConfig?: SMTPEmailProviderConfigInput;
    /**
     * SendGrid 邮件服务配置
     */
    sendGridConfig?: SendGridEmailProviderConfigInput;
    /**
     * 阿里企业邮件服务配置
     */
    aliExmailConfig?: AliExmailEmailProviderConfigInput;
    /**
     * 腾讯企业邮件服务配置
     */
    tencentExmailConfig?: TencentExmailEmailProviderConfigInput;
};

export namespace ConfigEmailProviderDto {

    /**
     * 第三方邮件服务商类型:
     * - `smtp`: 标准 SMTP 邮件服务
     * - `ali`: [阿里企业邮箱](https://www.ali-exmail.cn/Land/)
     * - `tencent`: [腾讯企业邮箱](https://work.weixin.qq.com/mail/)
     * - `sendgrid`: [SendGrid 邮件服务](https://sendgrid.com/)
     *
     */
    export enum type {
        SMTP = 'smtp',
        ALI = 'ali',
        TENCENT = 'tencent',
        SENDGRID = 'sendgrid',
    }


}

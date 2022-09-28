/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AliExmailEmailProviderConfig } from './AliExmailEmailProviderConfig';
import type { SendGridEmailProviderConfig } from './SendGridEmailProviderConfig';
import type { SMTPEmailProviderConfig } from './SMTPEmailProviderConfig';
import type { TencentExmailEmailProviderConfig } from './TencentExmailEmailProviderConfig';

export type EmailProviderDto = {
    /**
     * 是否启用，如果不启用，将默认使用 Authing 内置的邮件服务
     */
    enabled: boolean;
    /**
     * 第三方邮件服务商类型:
     * - `smtp`: 标准 SMTP 邮件服务
     * - `ali`: [阿里企业邮箱](https://www.ali-exmail.cn/Land/)
     * - `tencent`: [腾讯企业邮箱](https://work.weixin.qq.com/mail/)
     * - `sendgrid`: [SendGrid 邮件服务](https://sendgrid.com/)
     *
     */
    type?: EmailProviderDto.type;
    /**
     * SMTP 邮件服务配置
     */
    smtpConfig?: SMTPEmailProviderConfig;
    /**
     * SendGrid 邮件服务配置
     */
    sendGridConfig?: SendGridEmailProviderConfig;
    /**
     * 阿里企业邮件服务配置
     */
    aliExmailConfig?: AliExmailEmailProviderConfig;
    /**
     * 腾讯企业邮件服务配置
     */
    tencentExmailConfig?: TencentExmailEmailProviderConfig;
};

export namespace EmailProviderDto {

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

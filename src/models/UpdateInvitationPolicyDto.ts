/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DefaultPasswordConfigDto } from './DefaultPasswordConfigDto';
import type { InvitationLinkConfigDto } from './InvitationLinkConfigDto';

export type UpdateInvitationPolicyDto = {
    /**
     * 策略 ID
     */
    policyId: string;
    /**
     * 邀请策略名称
     */
    name?: string;
    /**
     * 邀请方式:
     * - `email`: 邮箱
     */
    inviteMethod?: UpdateInvitationPolicyDto.inviteMethod;
    /**
     * 邀请链接配置
     */
    inviteLinkConfig?: InvitationLinkConfigDto;
    /**
     * 初始化密码配置
     */
    defaultPasswordConfig?: DefaultPasswordConfigDto;
    /**
     * 邀请邮件是否展示密码
     */
    showPasswordInInviteEmail?: boolean;
    /**
     * 是否开启身份验证码
     */
    enabledIdentifierVerify?: boolean;
    /**
     * 发送身份验证码的方式
     * - `priorityEmail`: 优先邮箱
     * - `prioritySMS`: 优先短信
     */
    sendVerifyCodeMethod?: UpdateInvitationPolicyDto.sendVerifyCodeMethod;
    /**
     * 是否开启信息补全
     */
    enabledInfoFill?: boolean;
    /**
     * 信息补全页面提示
     */
    registerInfoFillMsg?: string;
    /**
     * 是否开启第三方身份源绑定
     */
    enabledExtIdp?: boolean;
    /**
     * 是否允许跳过第三方身份源绑定
     */
    allowSkipBindExtIdp?: boolean;
    /**
     * 身份源绑定提示信息
     */
    extIdpBindMsg?: string;
    /**
     * 支持绑定的身份源 ID 列表
     */
    extIdpConnIds?: Array<string>;
    /**
     * 注册信息补全字段列表配置
     */
    extendsFields?: Array<string>;
    /**
     * 邀请邮件模板类型
     */
    inviteEmailTemplateType?: string;
    /**
     * 欢迎邮件模板类型
     */
    welcomeEmailTemplateType?: string;
};

export namespace UpdateInvitationPolicyDto {

    /**
     * 邀请方式:
     * - `email`: 邮箱
     */
    export enum inviteMethod {
        EMAIL = 'email',
    }

    /**
     * 发送身份验证码的方式
     * - `priorityEmail`: 优先邮箱
     * - `prioritySMS`: 优先短信
     */
    export enum sendVerifyCodeMethod {
        PRIORITY_SMS = 'prioritySMS',
        PRIORITY_EMAIL = 'priorityEmail',
    }


}

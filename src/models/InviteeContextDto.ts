/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExtendsFieldDto } from './ExtendsFieldDto';

export type InviteeContextDto = {
    /**
     * 是否开启身份验证码
     */
    enabledIdentifierVerify: boolean;
    /**
     * 发送身份验证码的方式
     * - `priorityEmail`: 优先邮箱
     * - `prioritySMS`: 优先短信
     */
    sendVerifyCodeMethod: InviteeContextDto.sendVerifyCodeMethod;
    /**
     * 是否开启信息补全
     */
    enabledInfoFill: boolean;
    /**
     * 信息补全页面提示
     */
    registerInfoFillMsg?: string;
    /**
     * 注册信息补全字段列表配置
     */
    extendsFields: Array<ExtendsFieldDto>;
    /**
     * 信息补全字段的 i18n 对象
     */
    extendsFieldsI18n: any;
    /**
     * 信息补全字段的其他信息
     */
    extendsFieldsOptions: Array<any>;
    /**
     * 受邀人邮箱
     */
    email: string;
    /**
     * 受邀人手机号
     */
    phone?: string;
    /**
     * 手机号国际区码
     */
    phoneCountryCode?: string;
    /**
     * 受邀人名称
     */
    inviteeName?: string;
    /**
     * 验证码输入错误最大次数
     */
    verifyCodeMaxErrCount: number;
};

export namespace InviteeContextDto {

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

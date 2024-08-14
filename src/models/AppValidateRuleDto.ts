/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ErrMsgI18nDto } from './ErrMsgI18nDto';

export type AppValidateRuleDto = {
    /**
     * 字段类型
     * - `None`: 不校验
     * - `regExp`: 正则
     * - `phone`: 手机号校验框
     * - `email`: 邮箱校验框
     * - `isNumber`: 必须为数字
     */
    type: AppValidateRuleDto.type;
    /**
     * 正则表达式
     */
    content: AppValidateRuleDto.content;
    /**
     * 错误信息提示
     */
    errorMessage?: string;
    /**
     * 多语言显示
     */
    i18n?: ErrMsgI18nDto;
};

export namespace AppValidateRuleDto {

    /**
     * 字段类型
     * - `None`: 不校验
     * - `regExp`: 正则
     * - `phone`: 手机号校验框
     * - `email`: 邮箱校验框
     * - `isNumber`: 必须为数字
     */
    export enum type {
        NONE = 'None',
        REG_EXP = 'regExp',
        PHONE = 'phone',
        EMAIL = 'email',
        IS_NUMBER = 'isNumber',
    }

    /**
     * 正则表达式
     */
    export enum content {
        NONE = 'None',
        REG_EXP = 'regExp',
        PHONE = 'phone',
        EMAIL = 'email',
        IS_NUMBER = 'isNumber',
    }


}

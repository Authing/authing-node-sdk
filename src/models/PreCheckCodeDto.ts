/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PreCheckEmailCodeDto } from './PreCheckEmailCodeDto';
import type { PreCheckSmsCodeDto } from './PreCheckSmsCodeDto';

export type PreCheckCodeDto = {
    /**
     * 验证码类型
     */
    codeType: PreCheckCodeDto.codeType;
    /**
     * 短信验证码检验参数
     */
    smsCodePayload?: PreCheckSmsCodeDto;
    /**
     * 邮箱验证码检验参数
     */
    emailCodePayload?: PreCheckEmailCodeDto;
};

export namespace PreCheckCodeDto {

    /**
     * 验证码类型
     */
    export enum codeType {
        SMS = 'SMS',
        EMAIL = 'EMAIL',
    }


}

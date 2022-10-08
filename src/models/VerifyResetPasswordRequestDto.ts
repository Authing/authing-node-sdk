/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResetPasswordByEmailPassCodeDto } from './ResetPasswordByEmailPassCodeDto';
import type { ResetPasswordByPhonePassCodeDto } from './ResetPasswordByPhonePassCodeDto';

export type VerifyResetPasswordRequestDto = {
    /**
     * 忘记密码请求使用的验证手段：
     * - `EMAIL_PASSCODE`: 通过邮箱验证码进行验证，当前只支持这种验证方式。
     *
     */
    verifyMethod: VerifyResetPasswordRequestDto.verifyMethod;
    /**
     * 使用手机号验证码验证的数据
     */
    phonePassCodePayload?: ResetPasswordByPhonePassCodeDto;
    /**
     * 使用邮箱验证码验证的数据
     */
    emailPassCodePayload?: ResetPasswordByEmailPassCodeDto;
};

export namespace VerifyResetPasswordRequestDto {

    /**
     * 忘记密码请求使用的验证手段：
     * - `EMAIL_PASSCODE`: 通过邮箱验证码进行验证，当前只支持这种验证方式。
     *
     */
    export enum verifyMethod {
        EMAIL_PASSCODE = 'EMAIL_PASSCODE',
        PHONE_PASSCODE = 'PHONE_PASSCODE',
    }


}

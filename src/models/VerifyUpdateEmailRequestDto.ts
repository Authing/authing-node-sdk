/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UpdateEmailByEmailPassCodeDto } from './UpdateEmailByEmailPassCodeDto';

export type VerifyUpdateEmailRequestDto = {
    /**
     * 使用邮箱验证码方式验证的数据
     */
    emailPasscodePayload: UpdateEmailByEmailPassCodeDto;
    /**
     * 修改当前邮箱使用的验证手段：
     * - `EMAIL_PASSCODE`: 通过邮箱验证码进行验证，当前只支持这种验证方式。
     *
     */
    verifyMethod: VerifyUpdateEmailRequestDto.verifyMethod;
};

export namespace VerifyUpdateEmailRequestDto {

    /**
     * 修改当前邮箱使用的验证手段：
     * - `EMAIL_PASSCODE`: 通过邮箱验证码进行验证，当前只支持这种验证方式。
     *
     */
    export enum verifyMethod {
        EMAIL_PASSCODE = 'EMAIL_PASSCODE',
    }


}

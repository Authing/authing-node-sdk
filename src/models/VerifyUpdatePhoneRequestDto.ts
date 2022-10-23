/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UpdatePhoneByPhonePassCodeDto } from './UpdatePhoneByPhonePassCodeDto';

export type VerifyUpdatePhoneRequestDto = {
    /**
     * 使用手机号验证码方式验证的数据
     */
    phonePassCodePayload: UpdatePhoneByPhonePassCodeDto;
    /**
     * 修改手机号的验证方式：
     * - `PHONE_PASSCODE`: 使用短信验证码的方式进行验证，当前仅支持这一种方式。
     *
     */
    verifyMethod: VerifyUpdatePhoneRequestDto.verifyMethod;
};

export namespace VerifyUpdatePhoneRequestDto {

    /**
     * 修改手机号的验证方式：
     * - `PHONE_PASSCODE`: 使用短信验证码的方式进行验证，当前仅支持这一种方式。
     *
     */
    export enum verifyMethod {
        PHONE_PASSCODE = 'PHONE_PASSCODE',
    }


}

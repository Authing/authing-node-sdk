/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeleteAccountByEmailPassCodeDto } from './DeleteAccountByEmailPassCodeDto';
import type { DeleteAccountByPasswordDto } from './DeleteAccountByPasswordDto';
import type { DeleteAccountByPhonePassCodeDto } from './DeleteAccountByPhonePassCodeDto';

export type VerifyDeleteAccountRequestDto = {
    /**
     * 注销账号的验证手段：
     * - `PHONE_PASSCODE`: 使用手机号验证码方式进行验证。
     * - `EMAIL_PASSCODE`: 使用邮箱验证码方式进行验证。
     * - `PASSWORD`: 如果用户既没有绑定手机号又没有绑定邮箱，可以使用密码作为验证手段。
     *
     */
    verifyMethod: VerifyDeleteAccountRequestDto.verifyMethod;
    /**
     * 使用手机号验证码验证的数据
     */
    phonePassCodePayload?: DeleteAccountByPhonePassCodeDto;
    /**
     * 使用邮箱验证码验证的数据
     */
    emailPassCodePayload?: DeleteAccountByEmailPassCodeDto;
    /**
     * 使用密码验证的数据
     */
    passwordPayload?: DeleteAccountByPasswordDto;
};

export namespace VerifyDeleteAccountRequestDto {

    /**
     * 注销账号的验证手段：
     * - `PHONE_PASSCODE`: 使用手机号验证码方式进行验证。
     * - `EMAIL_PASSCODE`: 使用邮箱验证码方式进行验证。
     * - `PASSWORD`: 如果用户既没有绑定手机号又没有绑定邮箱，可以使用密码作为验证手段。
     *
     */
    export enum verifyMethod {
        PHONE_PASSCODE = 'PHONE_PASSCODE',
        EMAIL_PASSCODE = 'EMAIL_PASSCODE',
        PASSWORD = 'PASSWORD',
    }


}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoginTokenResponseDataDto } from './LoginTokenResponseDataDto';

export type VerifyAuthenticationResultDto = {
    /**
     * 验证认证器登录认证的结果，true 验证成功
     */
    verified: boolean;
    /**
     * 验证认证器登录认证通过时，即 verified = true，此数据才会返回。
     */
    tokenSet?: LoginTokenResponseDataDto;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResetUserPrincipalAuthenticationInfoOptionsDto } from './ResetUserPrincipalAuthenticationInfoOptionsDto';

export type ResetUserPrincipalAuthenticationInfoDto = {
    /**
     * 用户唯一标志，可以是用户 ID、用户名、邮箱、手机号、外部 ID、在外部身份源的 ID。
     */
    userId: string;
    /**
     * 可选参数
     */
    options?: ResetUserPrincipalAuthenticationInfoOptionsDto;
};

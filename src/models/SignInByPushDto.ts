/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SignInByPushOptionsDto } from './SignInByPushOptionsDto';

export type SignInByPushDto = {
    /**
     * 用户账号（用户名/手机号/邮箱）
     */
    account: string;
    /**
     * 可选参数
     */
    options?: SignInByPushOptionsDto;
};

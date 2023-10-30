/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SignInBySwitchOptionsDto } from './SignInBySwitchOptionsDto';

export type PublicAccountSwitchLoginDto = {
    /**
     * 切换登录目标用户 ID
     */
    targetUserId: string;
    /**
     * 可选参数
     */
    options?: SignInBySwitchOptionsDto;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetUserOptionsDto } from './GetUserOptionsDto';

export type GetUserDto = {
    /**
     * 用户 ID
     */
    userId?: string;
    /**
     * 手机号
     */
    phone?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 原系统 ID
     */
    externalId?: string;
    /**
     * 可选参数
     */
    options?: GetUserOptionsDto;
};

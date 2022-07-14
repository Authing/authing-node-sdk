/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { KickUsersOptionsDto } from './KickUsersOptionsDto';

export type KickUsersDto = {
    /**
     * APP ID 列表
     */
    appIds: Array<string>;
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 可选参数
     */
    options?: KickUsersOptionsDto;
};

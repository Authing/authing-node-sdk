/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { KickPublicAccountsOptionsDto } from './KickPublicAccountsOptionsDto';

export type KickPublicAccountsDto = {
    /**
     * APP ID 列表
     */
    appIds: Array<string>;
    /**
     * 公共账号 ID
     */
    userId: string;
    /**
     * 可选参数
     */
    options?: KickPublicAccountsOptionsDto;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetUserOptionsDto } from './GetUserOptionsDto';

export type GetUserBatchDto = {
    /**
     * 用户 ID 数组
     */
    userIds: Array<string>;
    /**
     * 可选参数
     */
    options?: GetUserOptionsDto;
};

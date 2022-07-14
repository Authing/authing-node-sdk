/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeleteUsersBatchOptionsDto } from './DeleteUsersBatchOptionsDto';

export type DeleteUsersBatchDto = {
    /**
     * 用户 ID 列表
     */
    userIds: Array<string>;
    /**
     * 可选参数
     */
    options?: DeleteUsersBatchOptionsDto;
};

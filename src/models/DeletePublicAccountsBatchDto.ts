/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeletePublicAccountsBatchOptionsDto } from './DeletePublicAccountsBatchOptionsDto';

export type DeletePublicAccountsBatchDto = {
    /**
     * 公共账号用户 ID 列表
     */
    userIds: Array<string>;
    /**
     * 可选参数
     */
    options?: DeletePublicAccountsBatchOptionsDto;
};

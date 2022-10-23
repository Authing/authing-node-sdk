/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UpdateUserBatchOptionsDto } from './UpdateUserBatchOptionsDto';
import type { UpdateUserInfoDto } from './UpdateUserInfoDto';

export type UpdateUserBatchReqDto = {
    /**
     * 用户列表
     */
    list: Array<UpdateUserInfoDto>;
    /**
     * 可选参数
     */
    options?: UpdateUserBatchOptionsDto;
};

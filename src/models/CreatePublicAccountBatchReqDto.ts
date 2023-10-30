/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatePublicAccountOptionsDto } from './CreatePublicAccountOptionsDto';
import type { CreatePublicAccountReqDto } from './CreatePublicAccountReqDto';

export type CreatePublicAccountBatchReqDto = {
    /**
     * 公共账号列表
     */
    list: Array<CreatePublicAccountReqDto>;
    /**
     * 可选参数
     */
    options?: CreatePublicAccountOptionsDto;
};

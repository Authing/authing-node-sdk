/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UpdatePublicAccountBatchOptionsDto } from './UpdatePublicAccountBatchOptionsDto';
import type { UpdatePublicAccountInfoDto } from './UpdatePublicAccountInfoDto';

export type UpdatePublicAccountBatchReqDto = {
    /**
     * 公共账号列表
     */
    list: Array<UpdatePublicAccountInfoDto>;
    /**
     * 可选参数
     */
    options?: UpdatePublicAccountBatchOptionsDto;
};

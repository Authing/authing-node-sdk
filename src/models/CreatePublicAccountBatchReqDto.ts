/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatePublicAccountOptionsDto } from './CreatePublicAccountOptionsDto';
import type { CreatePublicAccountReqDto } from './CreatePublicAccountReqDto';

export type CreatePublicAccountBatchReqDto = {
    /**
     * Public Account List
     */
    list: Array<CreatePublicAccountReqDto>;
    /**
     * Optional parameters
     */
    options?: CreatePublicAccountOptionsDto;
};

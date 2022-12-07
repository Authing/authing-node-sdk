/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateAsaAccountsBatchItemDto } from './CreateAsaAccountsBatchItemDto';

export type CreateAsaAccountsBatchDto = {
    /**
     * 账号列表
     */
    list: Array<CreateAsaAccountsBatchItemDto>;
    /**
     * 所属应用 ID
     */
    appId: string;
};

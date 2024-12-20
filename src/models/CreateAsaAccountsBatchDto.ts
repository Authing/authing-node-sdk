/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateAsaAccountsBatchItemDto } from './CreateAsaAccountsBatchItemDto';

export type CreateAsaAccountsBatchDto = {
    /**
     * Account list
     */
    list: Array<CreateAsaAccountsBatchItemDto>;
    /**
     * Belonging application ID
     */
    appId: string;
};

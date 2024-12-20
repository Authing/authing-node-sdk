/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeletePublicAccountsBatchOptionsDto } from './DeletePublicAccountsBatchOptionsDto';

export type DeletePublicAccountsBatchDto = {
    /**
     * List of public account user IDs
     */
    userIds: Array<string>;
    /**
     * Optional parameters
     */
    options?: DeletePublicAccountsBatchOptionsDto;
};

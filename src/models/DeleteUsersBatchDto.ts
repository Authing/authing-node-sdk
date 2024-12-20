/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeleteUsersBatchOptionsDto } from './DeleteUsersBatchOptionsDto';

export type DeleteUsersBatchDto = {
    /**
     * User ID list
     */
    userIds: Array<string>;
    /**
     * Optional parameters
     */
    options?: DeleteUsersBatchOptionsDto;
};

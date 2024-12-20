/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AsaAccountTargetDto } from './AsaAccountTargetDto';

export type GetAsaAccountAssignedTargetDataDto = {
    /**
     * Total
     */
    totalCount: number;
    /**
     * Subject list
     */
    list: Array<AsaAccountTargetDto>;
};

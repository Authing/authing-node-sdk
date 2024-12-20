/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GoodsPackageDto } from './GoodsPackageDto';

export type CostCurrentPackageInfo = {
    /**
     * Package code
     */
    code: string;
    /**
     * Package end time
     */
    endTime: string;
    /**
     * Number of days the package is overdue
     */
    overdueDays: string;
    /**
     * Package information
     */
    goodsPackage: GoodsPackageDto;
};

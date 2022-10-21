/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GoodsPackageDto } from './GoodsPackageDto';

export type CostCurrentPackageInfo = {
    /**
     * 套餐包编码
     */
    code: string;
    /**
     * 套餐结束时间
     */
    endTime: string;
    /**
     * 套餐逾期天数
     */
    overdueDays: string;
    /**
     * 套餐包信息
     */
    goodsPackage: GoodsPackageDto;
};

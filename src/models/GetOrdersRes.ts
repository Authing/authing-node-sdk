/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderItem } from './OrderItem';

export type GetOrdersRes = {
    /**
     * 总数
     */
    totalCount: string;
    /**
     * 响应数据
     */
    list: Array<OrderItem>;
};

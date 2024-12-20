/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrderItem } from './OrderItem';

export type GetOrdersRes = {
    /**
     * Total
     */
    totalCount: string;
    /**
     * Data list
     */
    list: Array<OrderItem>;
};

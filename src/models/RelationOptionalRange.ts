/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Condition } from './Condition';

export type RelationOptionalRange = {
    /**
     * 连词
     */
    conjunction: string;
    /**
     * 搜索条件
     */
    conditions: Condition;
};

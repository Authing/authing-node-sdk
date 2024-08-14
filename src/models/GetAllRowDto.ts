/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Condition } from './Condition';

export type GetAllRowDto = {
    /**
     * 功能 id
     */
    modelId: string;
    /**
     * 多个搜索条件的关系：
     * - and: 且
     * - or:  或
     *
     */
    conjunction?: string;
    /**
     * 搜索条件
     */
    conditions?: Array<Condition>;
};

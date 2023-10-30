/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Condition = {
    /**
     * 搜索字段的 key
     */
    key: string;
    /**
     * 搜索值
     */
    value: any;
    /**
     * 操作类型：
     * - eq: 等于
     * - ne: 不等于
     * - co: 包含
     * - gt: 大于
     * - lt: 小于
     * - lte: 小于等于
     * - gte: 大于等于
     * - in: 数组包含
     *
     */
    operator: string;
};

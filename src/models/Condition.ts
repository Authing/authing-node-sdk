/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Condition = {
    /**
     * The key of the search field
     */
    key: string;
    /**
     * Search value
     */
    value: any;
    /**
     * Operation type:
     * - eq: equal to
     * - ne: not equal to
     * - co: includes
     * - gt: greater than
     * - lt: less than
     * - lte: less than or equal to
     * - gte: greater than or equal to
     * - in: array contains
     *
     */
    operator: string;
};

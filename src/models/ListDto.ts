/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 我登录过的设备列表。
 */
export type ListDto = {
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
};

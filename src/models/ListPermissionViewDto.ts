/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListPermissionViewDto = {
    /**
     * 当前页数，从 1 开始
     */
    page?: number;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: number;
    /**
     * 关键字搜索,可以支持 userName 搜索
     */
    keyword?: string;
};

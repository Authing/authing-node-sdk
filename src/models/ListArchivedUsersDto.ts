/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取已归档的用户列表，支持分页，可以筛选开始时间等。
 */
export type ListArchivedUsersDto = {
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
    /**
     * 开始时间，为精确到秒的 UNIX 时间戳，默认不指定
     */
    startAt?: any;
};

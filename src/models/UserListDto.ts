/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 分页获取风险名单用户列表
 */
export type UserListDto = {
    /**
     * IP 类型
     */
    userListType?: any;
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
};

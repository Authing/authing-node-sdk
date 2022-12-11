/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 根据 ASA 账号 ID 分页获取账号被分配的主体列表
 */
export type GetAsaAccountAssignedTargetsDto = {
    /**
     * 所属应用 ID
     */
    appId?: any;
    /**
     * ASA 账号 ID
     */
    accountId?: any;
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
};

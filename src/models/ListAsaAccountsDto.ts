/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 分页获取某一应用下的 ASA 账号列表
 */
export type ListAsaAccountsDto = {
    /**
     * 所属应用 ID
     */
    appId?: any;
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取用户登录历史记录
 */
export type GetUserLoginHistoryDto = {
    /**
     * 用户 ID
     */
    userId?: any;
    /**
     * 应用 ID
     */
    appId?: any;
    /**
     * 客户端 IP
     */
    clientIp?: any;
    /**
     * 开始时间戳（毫秒）
     */
    start?: any;
    /**
     * 结束时间戳（毫秒）
     */
    end?: any;
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
};

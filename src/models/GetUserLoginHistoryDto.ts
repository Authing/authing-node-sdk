/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 通过用户 ID，获取用户登录历史记录，支持分页，可以选择指定用户 ID 类型、应用 ID、开始与结束时间戳等。
 */
export type GetUserLoginHistoryDto = {
    /**
     * 用户 ID
     */
    userId?: any;
    /**
     * 用户 ID 类型，可以指定为用户 ID、手机号、邮箱、用户名和 externalId。
     */
    userIdType?: any;
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

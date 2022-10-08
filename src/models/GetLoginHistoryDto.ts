/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取登录日志
 */
export type GetLoginHistoryDto = {
    /**
     * 应用 ID，可根据应用 ID 筛选。默认不传获取所有应用的登录历史。
     */
    appId?: any;
    /**
     * 客户端 IP，可根据登录时的客户端 IP 进行筛选。默认不传获取所有登录 IP 的登录历史。
     */
    clientIp?: any;
    /**
     * 是否登录成功，可根据是否登录成功进行筛选。默认不传获取的记录中既包含成功也包含失败的的登录历史。
     */
    success?: any;
    /**
     * 开始时间，为单位为毫秒的时间戳
     */
    start?: any;
    /**
     * 结束时间，为单位为毫秒的时间戳
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

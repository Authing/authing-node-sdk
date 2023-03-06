/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取 Authing 服务支持的所有事件列表
 */
export type ListEventsDto = {
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
    /**
     * 应用类型
     */
    app?: any;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取 Webhook 列表，可选页数、分页大小来获取
 */
export type ListWebhooksDto = {
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
};

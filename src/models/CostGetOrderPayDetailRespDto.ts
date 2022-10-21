/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CostGetOrderPayDetailRespDto = {
    /**
     * 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。
     */
    statusCode: number;
    /**
     * 描述信息
     */
    message: string;
    /**
     * 细分错误码，可通过此错误码得到具体的错误类型。
     */
    apiCode?: number;
    /**
     * 请求 ID。当请求失败时会返回。
     */
    requestId?: string;
    /**
     * 订单号
     */
    orderNo: string;
    /**
     * 渠道订单号
     */
    channelOrderNo: string;
    /**
     * 渠道订单号
     */
    paidAmount: string;
    /**
     * 支付时间
     */
    paidTime: string;
    /**
     * 支付账号
     */
    paidAccountNo: string;
    /**
     * 支付状态
     */
    payStatus: string;
    /**
     * 创建时间
     */
    createTime: string;
    /**
     * 支付方式
     */
    payType: string;
};

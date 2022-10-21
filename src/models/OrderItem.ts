/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OrderItem = {
    /**
     * 订单号
     */
    orderNo: string;
    /**
     * 套餐包名中文
     */
    goodsName: string;
    /**
     * 套餐包名英文
     */
    goodsNameEn: string;
    /**
     * 单价
     */
    goodsUnitPrice: string;
    /**
     * 数量
     */
    quantity: string;
    /**
     * 实际金额
     */
    actualAmount: string;
    /**
     * 订单状态
     */
    status: string;
    /**
     * 订单类型
     */
    orderType: string;
    /**
     * 创建时间
     */
    createTime: string;
    /**
     * Licence：license 订单，Offline：线下交易，Eadmin：后台开通，SelfHelp：自助下单，Cdkey：Cdkey 活动兑换
     */
    source: string;
};

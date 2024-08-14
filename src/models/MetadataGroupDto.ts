/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MetadataGroupDto = {
    /**
     * 群组 id
     */
    groupId: string;
    /**
     * 关键字
     */
    keyword?: string;
    /**
     * 排序条件
     */
    sort?: Array<any>;
    /**
     * 当前页数，从 1 开始
     */
    page?: number;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: number;
    /**
     * 是否返回嵌套的关联数据
     */
    getNestData?: boolean;
};

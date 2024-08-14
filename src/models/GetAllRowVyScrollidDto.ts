/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetAllRowVyScrollidDto = {
    /**
     * 每次获取数据的数量 默认 500，最多 5000
     */
    size: number;
    /**
     * 功能 id
     */
    modelId: string;
    /**
     * 分页查询滚动 id
     */
    scrollId?: string;
    /**
     * 查询的数据 id
     */
    id?: string;
    /**
     * 根据特定字段查询数据
     */
    query?: any;
    /**
     * 是否返回关联字段详情 默认 false
     */
    getRelationDetails?: boolean;
};

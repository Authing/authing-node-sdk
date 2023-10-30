/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取分组列表，支持分页。
 */
export type ListGroupsDto = {
    /**
     * 搜索分组 code 或分组名称
     */
    keywords?: any;
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
    /**
     * 是否展示元数据内容
     */
    withMetadata?: any;
    /**
     * 是否获取自定义数据
     */
    withCustomData?: any;
    /**
     * 是否拍平扩展字段
     */
    flatCustomData?: any;
};

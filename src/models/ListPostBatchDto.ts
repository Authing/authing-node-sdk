/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListPostBatchDto = {
    /**
     * 搜索岗位 code 或名称
     */
    keywords?: string;
    /**
     * 是否统计岗位关联的部门数和用户数
     */
    skipCount?: boolean;
    /**
     * 当前页数，从 1 开始
     */
    page?: number;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: number;
    /**
     * 是否展示元数据内容
     */
    withMetadata?: boolean;
    /**
     * 是否获取自定义数据
     */
    withCustomData?: boolean;
    /**
     * 是否拍平扩展字段
     */
    flatCustomData?: boolean;
    /**
     * 是否不显示 metadata 的 fieldId 字段
     */
    metadataNoFieldId?: boolean;
    /**
     * 创建时间在此时间之后的岗位
     */
    createdAfter?: number;
    /**
     * 创建时间在此时间之前的岗位
     */
    createdBefore?: number;
    /**
     * 更新时间在此时间之后的岗位
     */
    updatedAfter?: number;
    /**
     * 更新时间在此时间之前的岗位
     */
    updatedBefore?: number;
    /**
     * 岗位 code 数组
     */
    postCodes?: Array<string>;
};

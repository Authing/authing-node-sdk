/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 岗位列表
 */
export type ListPostDto = {
    /**
     * 搜索岗位 code 或名称
     */
    keywords?: any;
    /**
     * 是否统计岗位关联的部门数和用户数
     */
    skipCount?: any;
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
    /**
     * 是否不显示 metadata 的 fieldId 字段
     */
    metadataNoFieldId?: any;
    /**
     * 创建时间在此时间之后的岗位
     */
    createdAfter?: any;
    /**
     * 创建时间在此时间之前的岗位
     */
    createdBefore?: any;
    /**
     * 更新时间在此时间之后的岗位
     */
    updatedAfter?: any;
    /**
     * 更新时间在此时间之前的岗位
     */
    updatedBefore?: any;
};

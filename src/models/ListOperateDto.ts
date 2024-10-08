/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 操作管理列表(分页)
 */
export type ListOperateDto = {
    /**
     * model Id
     */
    modelId?: any;
    /**
     * 搜索功能名称
     */
    keywords?: any;
    /**
     * 关联字段 id
     */
    fieldId?: any;
    /**
     * 是否返回用户创建的操作，仅在传了 fieldId 时有效
     */
    showCreated?: any;
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
};

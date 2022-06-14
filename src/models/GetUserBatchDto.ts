/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 根据用户 id 批量获取用户信息
 */
export type GetUserBatchDto = {
    /**
     * 用户 ID 数组
     */
    userIds?: any;
    /**
     * 是否获取自定义数据
     */
    withCustomData?: any;
    /**
     * 是否获取 identities
     */
    withIdentities?: any;
    /**
     * 是否获取部门 ID 列表
     */
    withDepartmentIds?: any;
};

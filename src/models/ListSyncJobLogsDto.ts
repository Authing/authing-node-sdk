/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取同步作业详情
 */
export type ListSyncJobLogsDto = {
    /**
     * 同步作业 ID
     */
    syncJobId?: any;
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
    /**
     * 根据是否操作成功进行筛选
     */
    success?: any;
    /**
     * 根据操作类型进行筛选：
     * - `CreateUser`: 创建用户
     * - `UpdateUser`: 修改用户信息
     * - `DeleteUser`: 删除用户
     * - `UpdateUserIdentifier`: 修改用户唯一标志符
     * - `ChangeUserDepartment`: 修改用户部门
     * - `CreateDepartment`: 创建部门
     * - `UpdateDepartment`: 修改部门信息
     * - `DeleteDepartment`: 删除部门
     * - `MoveDepartment`: 移动部门
     * - `UpdateDepartmentLeader`: 同步部门负责人
     * - `CreateGroup`: 创建分组
     * - `UpdateGroup`: 修改分组
     * - `DeleteGroup`: 删除分组
     * - `Updateless`: 无更新
     *
     */
    action?: any;
    /**
     * 操作对象类型:
     * - `department`: 部门
     * - `user`: 用户
     *
     */
    objectType?: any;
};

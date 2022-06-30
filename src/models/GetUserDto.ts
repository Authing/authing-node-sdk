/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 通过 id、username、email、phone、email、externalId 获取用户详情
 */
export type GetUserDto = {
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
    /**
     * 用户 ID
     */
    userId?: any;
    /**
     * 手机号
     */
    phone?: any;
    /**
     * 邮箱
     */
    email?: any;
    /**
     * 用户名
     */
    username?: any;
    /**
     * 原系统 ID
     */
    externalId?: any;
};

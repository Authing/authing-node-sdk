/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 通过主体类型，获取用户、部门或角色的自定义字段列表。
 */
export type ListCustomFieldsDto = {
    /**
     * 目标对象类型：
     * - `USER`: 用户
     * - `ROLE`: 角色
     * - `GROUP`: 分组
     * - `DEPARTMENT`: 部门
     * ;该接口暂不支持分组(GROUP)
     */
    targetType?: any;
    /**
     * 字段类型
     */
    dataType?: any;
    /**
     * 租户 ID
     */
    tenantId?: any;
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
    /**
     * 用户是否可见
     */
    userVisible?: any;
    /**
     * 管理员是否可见
     */
    adminVisible?: any;
    /**
     * 访问控制
     */
    accessControl?: any;
    /**
     * 搜索关键词
     */
    keyword?: any;
    /**
     * 搜索语言
     */
    lang?: any;
};

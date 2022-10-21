/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 通过主体类型，获取用户、部门或角色的自定义字段列表。
 */
export type GetCustomFieldsDto = {
    /**
     * 目标对象类型：
     * - `USER`: 用户
     * - `ROLE`: 角色
     * - `GROUP`: 分组
     * - `DEPARTMENT`: 部门
     *
     */
    targetType?: any;
};

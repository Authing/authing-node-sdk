/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 通过主体类型，获取用户池配置的自定义字段列表。
 */
export type GetCustomFieldsDto = {
    /**
     * 主体类型，目前支持用户、角色、分组、部门
     */
    targetType?: any;
};

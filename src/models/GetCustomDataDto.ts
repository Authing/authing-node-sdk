/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取用户、分组、角色、组织机构的自定义字段值
 */
export type GetCustomDataDto = {
    /**
     * 主体类型，目前支持用户、角色、分组和部门
     */
    targetType?: any;
    /**
     * 目标对象唯一标志符
     */
    targetIdentifier?: any;
    /**
     * 所属权限分组的 code，当 target_type 为角色的时候需要填写，否则可以忽略。
     */
    namespace?: any;
};

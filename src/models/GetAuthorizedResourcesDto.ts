/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取某个主体被授权的资源列表
 */
export type GetAuthorizedResourcesDto = {
    /**
     * 目标对象类型
     */
    targetType?: any;
    /**
     * 目标对象唯一标志符
     */
    targetIdentifier?: any;
    /**
     * 所属权限分组的 code
     */
    namespace?: any;
    /**
     * 资源类型，如数据、API、按钮、菜单
     */
    resourceType?: any;
    /**
     * 是否获取被拒绝的资源
     */
    withDenied?: any;
};

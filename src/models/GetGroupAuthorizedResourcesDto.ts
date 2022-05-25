/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取分组被授权的资源列表
 */
export type GetGroupAuthorizedResourcesDto = {
    /**
     * 分组 code
     */
    code?: any;
    /**
     * 所属权限分组的 code
     */
    namespace?: any;
    /**
     * 资源类型
     */
    resourceType?: any;
};

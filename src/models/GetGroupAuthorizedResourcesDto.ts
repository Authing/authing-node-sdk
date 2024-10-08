/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 通过分组 code，获取分组被授权的资源列表，可以通过资源类型、权限分组 code 筛选。
 */
export type GetGroupAuthorizedResourcesDto = {
    /**
     * 分组 code
     */
    code?: any;
    /**
     * 所属权限分组(权限空间)的 Code，不传获取默认权限分组。
     */
    namespace?: any;
    /**
     * 资源类型
     */
    resourceType?: any;
};

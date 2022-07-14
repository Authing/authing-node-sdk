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
     * 所属权限分组的 code
     */
    namespace?: any;
    /**
     * 资源类型
     */
    resourceType?: any;
};

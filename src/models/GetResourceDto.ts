/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 根据筛选条件，获取资源详情。
 */
export type GetResourceDto = {
    /**
     * 资源唯一标志符
     */
    code?: any;
    /**
     * 所属权限分组(权限空间)的 Code，不传获取默认权限分组。
     */
    namespace?: any;
};

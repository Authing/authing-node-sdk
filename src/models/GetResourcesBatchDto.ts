/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 根据筛选条件，批量获取资源详情。
 */
export type GetResourcesBatchDto = {
    /**
     * 资源 code 列表，批量可以使用逗号分隔
     */
    codeList?: any;
    /**
     * 所属权限分组(权限空间)的 Code，不传获取默认权限分组。
     */
    namespace?: any;
};

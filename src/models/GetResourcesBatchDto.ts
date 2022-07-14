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
     * 所属权限分组的 code
     */
    namespace?: any;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 分别通过权限分组唯一标志符(Code)，批量获取权限分组详情。
 */
export type GetNamespacesBatchDto = {
    /**
     * 权限分组 code 列表，批量可以使用逗号分隔
     */
    codeList?: any;
};

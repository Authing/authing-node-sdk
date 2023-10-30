/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取数据资源,通过数据资源 ID 查询对应的数据资源信息,包含数据资源名称、数据资源 Code、数据资源类型（TREE、STRING、ARRAY）、数据资源所属权限空间 ID、数据资源所属权限空间 Code 以及数据资源操作列表等基本信息。
 */
export type GetDataResourceDto = {
    /**
     * 数据资源所属的权限空间 Code
     */
    namespaceCode?: any;
    /**
     * 数据资源 Code, 权限空间内唯一
     */
    resourceCode?: any;
};

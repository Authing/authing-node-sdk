/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListTenantUserDto = {
    /**
     * 租户 ID
     */
    tenantId: string;
    /**
     * 搜索关键字
     */
    keywords?: string;
    /**
     * 页码
     */
    page?: string;
    /**
     * 每页获取的数据量
     */
    limit?: string;
    /**
     * 是否返回自定义字段
     */
    withCustomData?: boolean;
    withIdentities?: boolean;
    /**
     * 是否返回部门信息
     */
    withDepartmentIds?: boolean;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListTenantAdminDto = {
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
};

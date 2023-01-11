/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AssociateTenantResourceDto = {
    /**
     * 资源 Code
     */
    code: string;
    /**
     * 是否关联应用资源
     */
    association: boolean;
    /**
     * 应用 ID
     */
    appId: string;
    /**
     * 租户 ID
     */
    tenantId?: string;
};

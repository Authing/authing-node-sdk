/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AssociationResourceDto = {
    /**
     * 应用 ID
     */
    appId: string;
    /**
     * 是否关联应用资源
     */
    association: boolean;
    /**
     * 资源 Code
     */
    code: string;
    /**
     * 租户 ID
     */
    tenantId?: string;
};

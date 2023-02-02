/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateMultipleTenantAdminDto = {
    /**
     * 租户 ID
     */
    tenantIds: Array<string>;
    /**
     * 是否授权
     */
    apiAuthorized?: boolean;
};

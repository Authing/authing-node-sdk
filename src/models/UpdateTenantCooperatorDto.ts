/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateTenantCooperatorDto = {
    /**
     * 是否授权 API
     */
    apiAuthorized: boolean;
    /**
     * 策略
     */
    policies: Array<string>;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 根据应用 ID 和用户 ID 获取租户门户配置，租户情况下默认不开启
 */
export type GetTenantPortalsConfigDto = {
    /**
     * 应用 ID
     */
    appId?: any;
    /**
     * 用户 ID
     */
    userId?: any;
};

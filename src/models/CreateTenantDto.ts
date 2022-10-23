/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTenantDto = {
    /**
     * 用户被租户拒绝登录时显示的提示文案
     */
    rejectHint: string;
    /**
     * 租户关联的应用 ID
     */
    appIds: Array<string>;
    /**
     * 租户名
     */
    name: string;
    /**
     * 租户 logo
     */
    logo?: Array<string>;
    /**
     * 租户描述
     */
    description?: string;
};

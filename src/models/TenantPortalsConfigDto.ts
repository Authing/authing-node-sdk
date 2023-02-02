/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MltipleTenantPortal } from './MltipleTenantPortal';

export type TenantPortalsConfigDto = {
    /**
     * 是否开启租户门户
     */
    enableMultipleTenantPortal: boolean;
    /**
     * 可选择的租户
     */
    list: Array<MltipleTenantPortal>;
};

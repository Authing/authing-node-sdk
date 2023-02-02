/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SingleTenantConsole } from './SingleTenantConsole';

export type AuthTenantConsoleListDto = {
    /**
     * 是否开启租户门户
     */
    enableMultipleTenantPortal: boolean;
    /**
     * 可切换的租户控制台
     */
    list: Array<SingleTenantConsole>;
};

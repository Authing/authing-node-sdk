/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetDeviceExclusiveValidScopeDataDto = {
    /**
     * Application ID
     */
    appId: string;
    /**
     * Application name
     */
    appName?: string;
    /**
     * Application logo
     */
    appLogo?: string;
    /**
     *Add time
     */
    createdAt: string;
    /**
     * Whether to apply by default
     */
    isDefault?: boolean;
};

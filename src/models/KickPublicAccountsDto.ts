/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { KickPublicAccountsOptionsDto } from './KickPublicAccountsOptionsDto';

export type KickPublicAccountsDto = {
    /**
     * APP ID list
     */
    appIds: Array<string>;
    /**
     * Public account ID
     */
    userId: string;
    /**
     * Optional parameters
     */
    options?: KickPublicAccountsOptionsDto;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationTabMethodsSortConfigDto } from './ApplicationTabMethodsSortConfigDto';
import type { ISsoPageCustomizationSettingsDto } from './ISsoPageCustomizationSettingsDto';
import type { LanguageCoinfigDto } from './LanguageCoinfigDto';
import type {TabConfigDto} from './TabConfigDto';

export type UpdateLoginConfig = {
    tabMethodsSortConfig: ApplicationTabMethodsSortConfigDto;
    qrCodeSortConfig: ApplicationTabMethodsSortConfigDto;
    ssoPageCustomizationSettings: ISsoPageCustomizationSettingsDto;
    passwordTabConfig: TabConfigDto;
    verifyCodeTabConfig: TabConfigDto;
    config: LanguageCoinfigDto;
    /**
     * Whether to allow tenant creation
     */
    enableCreateTenant: boolean;
    /**
     * Scenarios that allow tenant creation
     */
    createTenantScenes: Array<string>;
    /**
     * Whether to allow joining tenants
     */
    enableJoinTenant: boolean;
    /**
     * Allows creation of added scenes
     */
    joinTenantScenes: Array<string>;
    /**
     * Whether to verify the enterprise domain name
     */
    enableVerifyDomain: boolean;
    /**
     * Whether to automatically associate tenant applications
     */
    enableAutoConnectTenantApp: boolean;
    /**
     * Scenarios for verifying corporate domain names
     */
    verifyDomainScenes: Array<string>;
};

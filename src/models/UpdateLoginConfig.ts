/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationTabMethodsSortConfigDto } from './ApplicationTabMethodsSortConfigDto';
import type { ISsoPageCustomizationSettingsDto } from './ISsoPageCustomizationSettingsDto';
import type { LanguageCoinfigDto } from './LanguageCoinfigDto';
import type { TabConfigDto } from './TabConfigDto';

export type UpdateLoginConfig = {
    tabMethodsSortConfig: ApplicationTabMethodsSortConfigDto;
    qrCodeSortConfig: ApplicationTabMethodsSortConfigDto;
    ssoPageCustomizationSettings: ISsoPageCustomizationSettingsDto;
    passwordTabConfig: TabConfigDto;
    verifyCodeTabConfig: TabConfigDto;
    config: LanguageCoinfigDto;
    /**
     * 是否允许创建租户
     */
    enableCreateTenant: boolean;
    /**
     * 允许创建租户的场景
     */
    createTenantScenes: Array<string>;
    /**
     * 是否允许加入租户
     */
    enableJoinTenant: boolean;
    /**
     * 允许创建加入的场景
     */
    joinTenantScenes: Array<string>;
    /**
     * 是否校验企业域名
     */
    enableVerifyDomain: boolean;
    /**
     * 是否自动关联租户应用
     */
    enableAutoConnectTenantApp: boolean;
    /**
     * 校验企业域名的场景
     */
    verifyDomainScenes: Array<string>;
};

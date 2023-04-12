/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationLoginConfigDto } from './ApplicationLoginConfigDto';
import type { ISsoPageCustomizationSettingsDto } from './ISsoPageCustomizationSettingsDto';

export type UserPoolTenantConfigDto = {
    /**
     * UserPool ID
     */
    userPoolId: string;
    /**
     * 用户池是否作为租户
     */
    isUserPoolAsTenant: boolean;
    /**
     * 允许切换的类型
     */
    enableSwitchType: UserPoolTenantConfigDto.enableSwitchType;
    /**
     * 自定义 CSS
     */
    css: string;
    /**
     * 是否启用自定义 CSS
     */
    cssEnabled: boolean;
    /**
     * 自定义 Loading
     */
    customLoading: string;
    /**
     * 是否开启 Guard 切换
     */
    enableGuardVersionSwitch: boolean;
    /**
     * 使用 Guard 的版本
     */
    guardVersion: string;
    /**
     * 自定义 Loading 背景
     */
    loadingBackground: string;
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
     * 校验企业域名的场景
     */
    verifyDomainScenes: Array<string>;
    /**
     * 页面自定义配置
     */
    ssoPageCustomizationSettings: ISsoPageCustomizationSettingsDto;
    /**
     * 是否允许选择门户登录
     */
    enableMultipleTenantPortal: boolean;
    /**
     * 登录配置
     */
    loginConfig: ApplicationLoginConfigDto;
};

export namespace UserPoolTenantConfigDto {

    /**
     * 允许切换的类型
     */
    export enum enableSwitchType {
        TENANT_CONSOLE = 'tenant-console',
        TENANT_APP = 'tenant-app',
        TENANT_LAUNPAD = 'tenant-launpad',
    }


}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateTenantDto = {
    /**
     * 页面自定义配置
     */
    ssoPageCustomizationSettings: string;
    /**
     * 注册信息补全配置
     */
    extendsFields: string;
    /**
     * 注册 Tab 列表
     */
    registerTabs: string;
    /**
     * 登录 Tab 列表
     */
    loginTabs: string;
    /**
     * 密码登录页配置
     */
    passwordTabConfig: string;
    /**
     * 默认注册 Tab
     */
    defaultRegisterTab: string;
    /**
     * 默认登录 Tab
     */
    defaultLoginTab: string;
    /**
     * 自定义 CSS
     */
    css: string;
    /**
     * 租户关联的应用 ID
     */
    appIds: Array<string>;
    /**
     * 租户名
     */
    name: string;
    /**
     * 租户 ID
     */
    tenantId: string;
};

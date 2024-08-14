/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RoleDto = {
    /**
     * 角色 ID
     */
    id: string;
    /**
     * 权限分组(权限空间)内角色的唯一标识符 Code
     */
    code: string;
    /**
     * 权限分组(权限空间)内角色名称
     */
    name: string;
    /**
     * 角色描述
     */
    description: string;
    /**
     * 所属权限分组(权限空间)的 Code，不传获取默认权限分组。
     */
    namespace: string;
    /**
     * 所属权限分组(权限空间)的名称
     */
    namespaceName: string;
    /**
     * 角色状态，ENABLE-表示正常，DISABLE-表示禁止
     */
    status?: string;
    /**
     * 角色自动禁止时间，单位毫秒, 如果传null表示永久有效
     */
    disableTime?: number;
    /**
     * 是否开启可申请权限，另外应用必须开启 SSO 单点登录和未授权用户可以在应用面板中看到该应用配置
     */
    enablePermissionApply?: boolean;
};

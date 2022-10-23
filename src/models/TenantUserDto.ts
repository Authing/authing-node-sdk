/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TenantUserDto = {
    /**
     * 租户 ID
     */
    tenantId: string;
    /**
     * 用户池 ID
     */
    userPoolId: string;
    /**
     * 用户名
     */
    username: string;
    /**
     * 姓名
     */
    name: string;
    /**
     * 昵称
     */
    nickname: string;
    /**
     * 邮箱
     */
    email: string;
    /**
     * 手机
     */
    phone: string;
    /**
     * 地址
     */
    address: string;
    /**
     * 生日
     */
    birthdate: string;
    /**
     * 是否锁定
     */
    blocked: boolean;
    /**
     * 是否为租户管理员
     */
    isTenantAdmin: boolean;
    /**
     * 最后登录 IP
     */
    lastIP: string;
    /**
     * 最后登录应用
     */
    lastLoginApp: string;
    /**
     * 最后登录应用 Logo
     */
    lastLoginAppLogo: string;
    /**
     * 最后登录应用名称
     */
    lastLoginAppName: string;
    /**
     * 登录次数
     */
    loginsCount: number;
    /**
     * 租户成员 ID
     */
    memberId: string;
    /**
     * 关联的用户池级别的用户 ID
     */
    linkUserId: string;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MultipleTenantAdminDto = {
    /**
     * 用户唯一 ID
     */
    userId: string;
    /**
     * 用户名称
     */
    name: string;
    /**
     * 用户手机号
     */
    phone: string;
    /**
     * 用户邮箱
     */
    email: string;
    /**
     * 授权 API
     */
    apiAuthorized?: boolean;
    /**
     * 最后登录时间
     */
    lastLogin: string;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取用户曾经登录过的应用
 */
export type GetUserLoggedinAppsDto = {
    /**
     * 用户 ID
     */
    userId?: any;
    /**
     * 用户 ID 类型，可以指定为用户 ID、手机号、邮箱、用户名和 externalId。
     */
    userIdType?: any;
};

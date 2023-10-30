/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 此端点用于查询当前登录用户可切换登录的公共账号列表，如果没有可切换登录的公共账号，则返回空数组。
 */
export type GetUserSelectLoginPublicAccountsDto = {
    /**
     * 是否包含当前个人用户基本信息
     */
    withOriginUser?: any;
};

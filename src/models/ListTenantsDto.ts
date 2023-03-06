/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 此接口用于获取租户列表，支持模糊搜索。
 */
export type ListTenantsDto = {
    /**
     * 搜索关键字
     */
    keywords?: any;
    /**
     * 是否增加返回租户成员统计
     */
    withMembersCount?: any;
    /**
     * 增加返回租户下 app 简单信息
     */
    withAppDetail?: any;
    /**
     * 增加返回租户下创建者简单信息
     */
    withCreatorDetail?: any;
    /**
     * 增加返回租户下来源 app 简单信息
     */
    withSourceAppDetail?: any;
    /**
     * 页码
     */
    page?: any;
    /**
     * 每页获取的数据量
     */
    limit?: any;
};

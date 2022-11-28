/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ActionAuth = {
    /**
     * 数据策略授权用户 ID 列表
     */
    userIds: Array<string>;
    /**
     * 数据资源权限操作
     */
    action: string;
};

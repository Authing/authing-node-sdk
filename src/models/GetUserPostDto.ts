/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 此接口只会返回一个岗位，已废弃，请使用 /api/v3/get-user-posts 接口
 */
export type GetUserPostDto = {
    /**
     * 用户 id
     */
    userId?: any;
    /**
     * 是否获取自定义数据
     */
    withCustomData?: any;
};

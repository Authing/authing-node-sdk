/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetAccessKeyRespDto = {
    /**
     * 用户所拥有的 accessKeyId
     */
    accessKeyId: string;
    /**
     * 用户所拥有的 accessKeySecret
     */
    accessKeySecret: string;
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 创建时间
     */
    createdAt: string;
    /**
     * accessKeyId 状态
     */
    status: string;
    /**
     * 最后使用时间
     */
    lastDate: string;
    /**
     * accessKeyId 所在用户池
     */
    userPoolId: string;
};

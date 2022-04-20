/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetManagementAccessTokenDto = {
    /**
     * AccessKey Secret: 如果是以用户池全局 AK/SK 初始化，为用户池密钥；如果是以协作管理员的 AK/SK 初始化，为协作管理员的 SK。
     */
    accessKeySecret: string;
    /**
     * AccessKey ID: 如果是以用户池全局 AK/SK 初始化，为用户池 ID；如果是以协作管理员的 AK/SK 初始化，为协作管理员的 AccessKey ID。
     */
    accessKeyId: string;
};

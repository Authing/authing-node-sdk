/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserFieldDecryptReqItemDto } from './UserFieldDecryptReqItemDto';

export type UserFieldDecryptReqDto = {
    /**
     * 用户需要解密的属性列表
     */
    data: Array<UserFieldDecryptReqItemDto>;
    /**
     * 私钥，通过控制台安全设置-数据安全-数据加密获取
     */
    privateKey: string;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SyncTaskWechatworkClientConfig = {
    /**
     * 企业 ID（CorpId）
     */
    corpID: string;
    /**
     * 企业微信通讯录密钥 Secret
     */
    secret: string;
    /**
     * 通讯录事件同步 Token
     */
    token?: string;
    /**
     * 通讯录事件同步 EncodingAESKey
     */
    encodingAESKey?: string;
    /**
     * 代理地址
     */
    agentUrl?: string;
};

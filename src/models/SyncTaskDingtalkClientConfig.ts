/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SyncTaskDingtalkClientConfig = {
    /**
     * 企业 ID（CorpId）
     */
    corpId: string;
    /**
     * 钉钉应用的 AppKey
     */
    appKey: string;
    /**
     * 钉钉应用的 AppSecret
     */
    appSecret: string;
    /**
     * 加密 aes_key
     */
    aes_key?: string;
    /**
     * 签名 token
     */
    token?: string;
};

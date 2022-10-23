/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SyncTaskLarkClientConfig = {
    /**
     * 飞书应用 App ID
     */
    app_id: string;
    /**
     * 飞书应用 App Secret
     */
    app_secret: string;
    /**
     * 飞书事件订阅的 Encrypt Key，可以在飞书开放平台应用详情的「事件订阅」页面获取。如果你需要开启实时同步，此参数必填。
     */
    encrypt_key?: string;
    /**
     * 飞书事件订阅的 Verification Token，可以在飞书开放平台应用详情的「事件订阅」页面获取。如果你需要开启实时同步，此参数必填。
     */
    verification_token?: string;
};

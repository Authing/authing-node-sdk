/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifyDeleteAccountRequestDataDto = {
    /**
     * 用于注销账号的临时 Token，你需要调用**注销账号**接口执行实际注销账号操作。
     */
    deleteAccountToken: string;
    /**
     * Token 有效时间，默认为 60 秒。
     */
    tokenExpiresIn: number;
};

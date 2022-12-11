/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateAsaAccountDto = {
    /**
     * 账号信息，一般为包含 "account", "password" key 的键值对
     */
    accountInfo: any;
    /**
     * ASA 账号 ID
     */
    accountId: string;
    /**
     * 所属应用 ID
     */
    appId: string;
};

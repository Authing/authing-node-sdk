/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignInByDouyinMiniProgramPhoneInfoPayloadDto = {
    /**
     * 小程序获取用户手机号返回的**加密算法的初始向量** `iv`，使用 encryptedData 时，必填
     */
    iv?: string;
    /**
     * 小程序获取用户手机号返回的**用户手机号信息的加密数据** `encryptedData`
     */
    encryptedData?: string;
};

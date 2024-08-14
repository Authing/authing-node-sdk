/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignInByDouyinMiniProgramCodePayloadDto = {
    /**
     * 获取抖音开放数据返回的加密数据（encryptedData）
     */
    encryptedData?: string;
    /**
     * 对称解密算法初始向量，由抖音返回；使用 encryptedData 时，必填
     */
    iv?: string;
    /**
     * `tt.login` 接口返回的用户 `code`
     */
    code: string;
};

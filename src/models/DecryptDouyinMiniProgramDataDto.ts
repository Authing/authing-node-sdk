/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DecryptDouyinMiniProgramDataDto = {
    /**
     * `tt.login` 接口返回的用户 `code`
     */
    code: string;
    /**
     * 对称解密算法初始向量，由抖音返回
     */
    iv: string;
    /**
     * 获取抖音开放数据返回的加密数据（encryptedData）
     */
    encryptedData: string;
    /**
     * 抖音小程序的外部身份源连接标志符
     */
    extIdpConnidentifier: string;
};

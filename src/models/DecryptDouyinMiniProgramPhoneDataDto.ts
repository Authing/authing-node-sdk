/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DecryptDouyinMiniProgramPhoneDataDto = {
    /**
     * 用户绑定的手机号（国外手机号会有区号）
     */
    phoneNumber: string;
    /**
     * 没有区号的手机号
     */
    purePhoneNumber: string;
    /**
     * 区号
     */
    countryCode: string;
};

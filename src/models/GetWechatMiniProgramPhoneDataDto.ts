/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetWechatMiniProgramPhoneDataDto = {
    /**
     * 包含区号的手机号
     */
    phoneNumber: string;
    /**
     * 不包含区号的手机号
     */
    purePhoneNumber: string;
    /**
     * 区号
     */
    countryCode: string;
};

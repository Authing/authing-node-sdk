/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IsUserExistsReqDto = {
    /**
     * 用户名，用户池内唯一
     */
    username?: string;
    /**
     * 邮箱，不区分大小写
     */
    email?: string;
    /**
     * 手机号，不带区号。如果是国外手机号，请在 phoneCountryCode 参数中指定区号。
     */
    phone?: string;
    /**
     * 第三方外部 ID
     */
    externalId?: string;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IsUserExistsReqDto = {
    /**
     * 用户名，用户池内唯一
     */
    username?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 手机号
     */
    phone?: string;
    /**
     * 第三方外部 ID
     */
    externalId?: string;
};

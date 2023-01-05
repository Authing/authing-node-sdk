/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EnrollFactorEnrollmentDataDto = {
    /**
     * 绑定短信、邮箱验证码、OTP 类型的认证要素时，需要传此参数。值为短信/邮箱/OTP 验证码。
     */
    passCode?: string;
    /**
     * 绑定 FACE 类型的认证要素时，需要传此参数。值为绑定人脸图片链接。
     */
    photo?: string;
    /**
     * 绑定 FACE 类型的认证要素时，需要传此参数。是否是外部链接图片。
     */
    isExternalPhoto?: boolean;
};

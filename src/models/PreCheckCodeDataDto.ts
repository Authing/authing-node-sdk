/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PreCheckCodeDataDto = {
    /**
     * 验证码是否正确且有效
     */
    isValid: boolean;
    /**
     * 如果验证码不正确或者已失效，具体的错误信息
     */
    message?: string;
};

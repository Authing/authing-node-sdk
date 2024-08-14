/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetCaptchaCodeDataDto = {
    /**
     * 验证码图片 svg
     */
    captchaCodeSvg: string;
    /**
     * 验证码对应 token，需要在登录接口中与用户输入的验证码一起提交
     */
    captchaToken: string;
};

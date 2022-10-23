/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UnbindPhoneDto = {
    /**
     * 短信验证码，需要先调用**发送短信**接口接收验证码。
     */
    passCode: string;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignInByBaiduPayloadDto = {
    /**
     * 百度移动端社会化登录获取到的授权码 `code`。和属性 `access_token` 任选一个参数。两个都不为空，则优先使用授权码 `code` 参数。
     */
    code?: string;
    /**
     * 百度移动端社会化登录获取到的授权访问凭证 `access_token`。和属性 `code` 任选一个参数。两个都不为空，则优先使用授权码 `code` 参数。
     */
    access_token?: string;
};

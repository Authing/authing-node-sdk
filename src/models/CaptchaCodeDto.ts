/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 当用户池开启**登录失败次数限制**并且**登录安全策略**设置为**验证码**时，如果当前请求触发登录失败次数上限，要求用户输入图形验证码。此接口用于在前端生成图形验证码，会返回一个 `content-type` 为 `image/svg+xml` 的响应。
 */
export type CaptchaCodeDto = {
    /**
     * 随机字符串或者时间戳，防止浏览器缓存
     */
    r?: any;
};

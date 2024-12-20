/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * When the user pool turns on the **login failure limit** and the **login security policy** is set to **verification code**, if the current request triggers the upper limit on the number of login failures, the user is required to enter a graphical verification code. This interface is used to generate graphical verification codes on the front end and will return a response with `content-type` as `image/svg+xml`.
 */
export type CaptchaCodeDto = {
    /**
     * Random string or timestamp to prevent browser caching
     */
    r?: any;
};

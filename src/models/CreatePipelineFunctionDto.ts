/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreatePipelineFunctionDto = {
    /**
     * 函数源代码
     */
    sourceCode: string;
    /**
     * 函数的触发场景：
     * - `PRE_REGISTER`: 注册前
     * - `POST_REGISTER`: 注册后
     * - `PRE_AUTHENTICATION`: 认证前
     * - `POST_AUTHENTICATION`: 认证后
     * - `PRE_OIDC_ID_TOKEN_ISSUED`: OIDC ID Token 签发前
     * - `PRE_OIDC_ACCESS_TOKEN_ISSUED`: OIDC Access Token 签发前
     * - `PRE_COMPLETE_USER_INFO`: 补全用户信息前
     *
     */
    scene: CreatePipelineFunctionDto.scene;
    /**
     * 函数名称
     */
    funcName: string;
    /**
     * 函数描述
     */
    funcDescription?: string;
    /**
     * 是否异步执行。设置为异步执行的函数不会阻塞整个流程的执行，适用于异步通知的场景，比如飞书群通知、钉钉群通知等。
     */
    isAsynchronous?: boolean;
    /**
     * 函数运行超时时间，要求必须为整数，最短为 1 秒，最长为 60 秒，默认为 3 秒。
     */
    timeout?: number;
    /**
     * 如果函数运行超时，是否终止整个流程，默认为否。
     */
    terminateOnTimeout?: boolean;
    /**
     * 是否启用此 Pipeline
     */
    enabled?: boolean;
};

export namespace CreatePipelineFunctionDto {

    /**
     * 函数的触发场景：
     * - `PRE_REGISTER`: 注册前
     * - `POST_REGISTER`: 注册后
     * - `PRE_AUTHENTICATION`: 认证前
     * - `POST_AUTHENTICATION`: 认证后
     * - `PRE_OIDC_ID_TOKEN_ISSUED`: OIDC ID Token 签发前
     * - `PRE_OIDC_ACCESS_TOKEN_ISSUED`: OIDC Access Token 签发前
     * - `PRE_COMPLETE_USER_INFO`: 补全用户信息前
     *
     */
    export enum scene {
        PRE_REGISTER = 'PRE_REGISTER',
        POST_REGISTER = 'POST_REGISTER',
        PRE_AUTHENTICATION = 'PRE_AUTHENTICATION',
        POST_AUTHENTICATION = 'POST_AUTHENTICATION',
        PRE_OIDC_ID_TOKEN_ISSUED = 'PRE_OIDC_ID_TOKEN_ISSUED',
        PRE_OIDC_ACCESS_TOKEN_ISSUED = 'PRE_OIDC_ACCESS_TOKEN_ISSUED',
        PRE_COMPLETE_USER_INFO = 'PRE_COMPLETE_USER_INFO',
    }


}

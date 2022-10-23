/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取 Pipeline 函数列表
 */
export type ListPipelineFunctionsDto = {
    /**
     * 通过函数的触发场景进行筛选（可选，默认返回所有）：
     * - `PRE_REGISTER`: 注册前
     * - `POST_REGISTER`: 注册后
     * - `PRE_AUTHENTICATION`: 认证前
     * - `POST_AUTHENTICATION`: 认证后
     * - `PRE_OIDC_ID_TOKEN_ISSUED`: OIDC ID Token 签发前
     * - `PRE_OIDC_ACCESS_TOKEN_ISSUED`: OIDC Access Token 签发前
     * - `PRE_COMPLETE_USER_INFO`: 补全用户信息前
     *
     */
    scene?: any;
};

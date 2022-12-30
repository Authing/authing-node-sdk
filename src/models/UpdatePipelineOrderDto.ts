/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdatePipelineOrderDto = {
    /**
     * 新的排序方式，按照函数 ID 的先后顺序进行排列。
     */
    order: Array<string>;
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
    scene: UpdatePipelineOrderDto.scene;
};

export namespace UpdatePipelineOrderDto {

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
        PRE_MFA_VERIFY = 'PRE_MFA_VERIFY',
        POST_MFA_VERIFY = 'POST_MFA_VERIFY',
    }


}

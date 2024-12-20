/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreatePipelineFunctionDto = {
    /**
     * Function source code
     */
    sourceCode: string;
    /**
     * Function trigger scenario:
     * - `PRE_REGISTER`: before registration
     * - `POST_REGISTER`: after registration
     * - `PRE_AUTHENTICATION`: before authentication
     * - `POST_AUTHENTICATION`: after authentication
     * - `PRE_OIDC_ID_TOKEN_ISSUED`: before OIDC ID Token issuance
     * - `PRE_OIDC_ACCESS_TOKEN_ISSUED`: before OIDC Access Token issuance
     * - `PRE_COMPLETE_USER_INFO`: before completing user information
     *
     */
    scene: CreatePipelineFunctionDto.scene;
    /**
     * function name
     */
    funcName: string;
    /**
     * Function description
     */
    funcDescription?: string;
    /**
     * Whether to execute asynchronously. Functions set for asynchronous execution will not block the execution of the entire process and are suitable for asynchronous notification scenarios, such as Feishu group notifications, DingTalk group notifications, etc.
     */
    isAsynchronous?: boolean;
    /**
     * The function running timeout must be an integer, the minimum is 1 second, the maximum is 60 seconds, and the default is 3 seconds.
     */
    timeout?: number;
    /**
     * If the function times out, whether to terminate the entire process, the default is no.
     */
    terminateOnTimeout?: boolean;
    /**
     * Whether to enable this Pipeline
     */
    enabled?: boolean;
};

export namespace CreatePipelineFunctionDto {

    /**
     * Function trigger scenario:
     * - `PRE_REGISTER`: before registration
     * - `POST_REGISTER`: after registration
     * - `PRE_AUTHENTICATION`: before authentication
     * - `POST_AUTHENTICATION`: after authentication
     * - `PRE_OIDC_ID_TOKEN_ISSUED`: before OIDC ID Token issuance
     * - `PRE_OIDC_ACCESS_TOKEN_ISSUED`: before OIDC Access Token issuance
     * - `PRE_COMPLETE_USER_INFO`: before completing user information
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

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteWebhookRespDto = {
    /**
     * Business status code, you can use this status code to determine whether the operation is successful, 200 means success.
     */
    statusCode: number;
    /**
     *Description information
     */
    message: string;
    /**
     * Subdivide the error code, and you can get the specific error type through this error code. For details, please view the apiCode segmentation description in Development Preparation
     */
    apiCode?: number;
    /**
     * Request ID. Returned when the request fails.
     */
    requestId?: string;
};

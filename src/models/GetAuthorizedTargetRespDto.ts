/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetAuthorizedTargetDataDto } from './GetAuthorizedTargetDataDto';

export type GetAuthorizedTargetRespDto = {
    /**
     * Business status code, you can use this status code to determine whether the operation is successful, 200 means success.
     */
    statusCode: number;
    /**
     *Description information
     */
    message: string;
    /**
     * Subdivide the error code, and you can get the specific error type through this error code.
     */
    apiCode?: number;
    /**
     * Request ID. Returned when the request fails.
     */
    requestId?: string;
    /**
     *Response data
     */
    data: GetAuthorizedTargetDataDto;
};

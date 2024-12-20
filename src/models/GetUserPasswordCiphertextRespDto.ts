/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetUserPasswordCiphertextDataDto } from './GetUserPasswordCiphertextDataDto';

export type GetUserPasswordCiphertextRespDto = {
    /**
     * Business status code, you can use this status code to determine whether the operation is successful, 200 means success.
     */
    statusCode: number;
    /**
     *Description information
     */
    message: string;
    /**
     * Subdivide the error code, and you can get the specific error type through this error code (successful requests will not be returned). For a detailed list of error codes, please see: [API Code List](https://api-explorer.authing.cn/?tag=group/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87#t ag/%E5%BC%80%E5%8F%91%E5%87%86%E5%A4%87/%E9%94%99%E8%AF%AF%E5%A4%84%E7%90% 86/apiCode)
     */
    apiCode?: number;
    /**
     * Request ID. Returned when the request fails.
     */
    requestId?: string;
    /**
     *Response data
     */
    data: GetUserPasswordCiphertextDataDto;
};

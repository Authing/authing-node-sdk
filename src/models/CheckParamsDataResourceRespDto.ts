/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CheckParamsDataResourceRespDto = {
    /**
     * Data resource name or Code verification is valid
     */
    isValid: boolean;
    /**
     * Data resource name or Code verification failure prompt message. If the verification is successful, the message will not be returned.
     */
    message?: string;
};

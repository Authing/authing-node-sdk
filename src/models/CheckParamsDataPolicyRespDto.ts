/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CheckParamsDataPolicyRespDto = {
    /**
     * Is the data policy name verification valid?
     */
    isValid: boolean;
    /**
     * Prompt message for data policy name verification failure. If verification is successful, message will not be returned.
     */
    message?: string;
};

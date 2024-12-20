/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetDataPolicyRespDto = {
    /**
     * Data policy ID
     */
    policyId: string;
    /**
     * Data policy name, unique to user pool
     */
    policyName: string;
    /**
     * Data strategy description
     */
    description?: string;
    /**
     * Data policy creation time
     */
    createdAt: string;
    /**
     * Data policy update time
     */
    updatedAt: string;
};

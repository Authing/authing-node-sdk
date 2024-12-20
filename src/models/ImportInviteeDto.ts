/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ImportInviteeDto = {
    /**
     * Whether the operation was successful
     */
    success: boolean;
    /**
     * Operation result
     */
    msg?: boolean;
    /**
     * Data check results
     */
    failed?: Array<any>;
    /**
     * Data import results
     */
    insertRes?: Array<any>;
};

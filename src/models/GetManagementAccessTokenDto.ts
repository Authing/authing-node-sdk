/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetManagementAccessTokenDto = {
    /**
     * AccessKey ID: If it is initialized with the global AK/SK of the user pool, it is the user pool ID; if it is initialized with the AK/SK of the collaborative administrator, it is the AccessKey ID of the collaborative administrator.
     */
    accessKeyId: string;
    /**
     * AccessKey Secret: If it is initialized with the global AK/SK of the user pool, it is the user pool key; if it is initialized with the AK/SK of the collaborative administrator, it is the SK of the collaborative administrator.
     */
    accessKeySecret: string;
};

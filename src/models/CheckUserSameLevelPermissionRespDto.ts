/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CheckUserSameLevelPermissionRespDto = {
    /**
     * Data resource permission operations
     */
    action: string;
    /**
     *Tree resource node code
     */
    resourceNodeCode: string;
    /**
     * Whether you have action permission
     */
    enabled: boolean;
};

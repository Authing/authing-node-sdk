/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * This endpoint is used to query the list of public accounts that the currently logged in user can switch to log in to. If there is no public account that can switch to log in, an empty array will be returned.
 */
export type GetUserSelectLoginPublicAccountsDto = {
    /**
     * Whether it contains basic information of the current personal user
     */
    withOriginUser?: any;
};

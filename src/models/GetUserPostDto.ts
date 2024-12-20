/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * This interface will only return one post and is obsolete. Please use the /api/v3/get-user-posts interface.
 */
export type GetUserPostDto = {
    /**
     * user id
     */
    userId?: any;
    /**
     * Whether to obtain custom data
     */
    withCustomData?: any;
};

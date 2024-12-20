/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Obtain resource details in batches based on filter conditions.
 */
export type GetResourcesBatchDto = {
    /**
     * Resource code list, batches can be separated by commas
     */
    codeList?: any;
    /**
     * The Code of the permission group (permission space) to which it belongs is not passed to obtain the default permission group.
     */
    namespace?: any;
};

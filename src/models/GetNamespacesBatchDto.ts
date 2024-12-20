/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Obtain permission group details in batches through the unique identifier (Code) of the permission group.
 */
export type GetNamespacesBatchDto = {
    /**
     * Permission group code list, batches can be separated by commas
     */
    codeList?: any;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteResourcesBatchDto = {
    /**
     * The Code of the permission group (permission space) to which it belongs is not passed to obtain the default permission group.
     */
    namespace?: string;
    /**
     * Resource Code list
     */
    codeList?: Array<string>;
    /**
     * Resource ID list
     */
    ids?: Array<string>;
};

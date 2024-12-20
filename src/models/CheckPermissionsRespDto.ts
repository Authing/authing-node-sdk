/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CheckPermissionsRespDto = {
    /**
     * Permission space Code
     */
    namespaceCode: string;
    /**
     * Data resource permission operations
     */
    action: string;
    /**
     * Resource path
     */
    resource: string;
    /**
     * Whether the user has a certain operation of the data resource under a certain permission space
     */
    enabled: boolean;
};

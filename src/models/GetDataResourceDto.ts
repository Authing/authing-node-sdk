/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Obtain data resources and query the corresponding data resource information through the data resource ID, including data resource name, data resource Code, data resource type (TREE, STRING, ARRAY), permission space ID to which the data resource belongs, permission space code to which the data resource belongs, and Basic information such as data resource operation list.
 */
export type GetDataResourceDto = {
    /**
     * The permission space code to which the data resource belongs
     */
    namespaceCode?: any;
    /**
     * Data resource Code, unique in the permission space
     */
    resourceCode?: any;
};

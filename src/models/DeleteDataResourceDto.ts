/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteDataResourceDto = {
    /**
     * Data resource Code, unique in the permission space
     */
    resourceCode: string;
    /**
     * The permission space code to which the data resource belongs
     */
    namespaceCode: string;
};

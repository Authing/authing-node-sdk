/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteDnefReq = {
    /**
     * Unique identification of the field, length 1-64 characters, only allowed to contain English letters, numbers, underscore _, dollar sign $
     */
    key: string;
    /**
     * Data resource Code, unique in the permission space
     */
    resourceCode: string;
    /**
     * The permission space code to which the data resource belongs
     */
    namespaceCode: string;
};

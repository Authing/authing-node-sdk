/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateArrayDataResourceDto = {
    /**
     * Data resource permission operation list
     */
    actions: Array<string>;
    /**
     * Array data resource node
     */
    struct: Array<string>;
    /**
     * Data resource Code, unique in the permission space
     */
    resourceCode: string;
    /**
     * Data resource name, unique within the permission space
     */
    resourceName: string;
    /**
     * The permission space Code where the data strategy is located
     */
    namespaceCode: string;
    /**
     * Data resource description
     */
    description?: string;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataResourceTreeStructs } from './DataResourceTreeStructs';
import type { ExtendField } from './ExtendField';

export type CreateTreeDataResourceDto = {
    /**
     * Data resource permission operation list
     */
    actions: Array<string>;
    /**
     * Tree data resource node
     */
    struct: Array<DataResourceTreeStructs>;
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
    /**
     * Extended field list, currently only supports tree type resources
     */
    extendFieldList?: Array<ExtendField>;
};

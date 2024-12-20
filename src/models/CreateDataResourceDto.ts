/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataResourceTreeStructs } from './DataResourceTreeStructs';
import type { ExtendField } from './ExtendField';

export type CreateDataResourceDto = {
    /**
     * Data resource permission operation list
     */
    actions: Array<string>;
    /**
     * Data resource structure, supporting string (STRING), tree structure (TREE) and array structure (ARRAY).
     */
    struct: (DataResourceTreeStructs | string | Array<string>);
    /**
     * Data resource type, currently supports tree structure (TREE), string (STRING), and array (ARRAY)
     */
    type: CreateDataResourceDto.type;
    /**
     * Data resource Code, unique in the permission space
     */
    resourceCode: string;
    /**
     * Data resource name, unique within the permission space
     */
    resourceName: string;
    /**
     * The permission space code to which the data resource belongs
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

export namespace CreateDataResourceDto {

    /**
     * Data resource type, currently supports tree structure (TREE), string (STRING), and array (ARRAY)
     */
    export enum type {
        TREE = 'TREE',
        STRING = 'STRING',
        ARRAY = 'ARRAY',
    }


}

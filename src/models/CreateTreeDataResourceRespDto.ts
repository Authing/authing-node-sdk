/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataResourceTreeStructs } from './DataResourceTreeStructs';
import type { ExtendField } from './ExtendField';

export type CreateTreeDataResourceRespDto = {
    /**
     * Data resource name, unique within the permission space
     */
    resourceName: string;
    /**
     * Data resource Code, unique in the permission space
     */
    resourceCode: string;
    /**
     * Data resource type, currently supports tree structure (TREE), string (STRING), and array (ARRAY)
     */
    type: CreateTreeDataResourceRespDto.type;
    /**
     * Data resource description
     */
    description?: string;
    /**
     * Tree data resource node
     */
    struct: Array<DataResourceTreeStructs>;
    /**
     * Data resource permission operation list
     */
    actions: Array<string>;
    /**
     * Extended field list, currently only supports tree type resources
     */
    extendFieldList?: Array<ExtendField>;
};

export namespace CreateTreeDataResourceRespDto {

    /**
     * Data resource type, currently supports tree structure (TREE), string (STRING), and array (ARRAY)
     */
    export enum type {
        TREE = 'TREE',
        STRING = 'STRING',
        ARRAY = 'ARRAY',
    }


}

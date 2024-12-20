/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateArrayDataResourceRespDto = {
    /**
     * Data resource name, unique in the permission space
     */
    resourceName: string;
    /**
     * Data resource Code, unique in the permission space
     */
    resourceCode: string;
    /**
     * Data resource type, currently supports tree structure (TREE), string (STRING), array (ARRAY)
     */
    type: CreateArrayDataResourceRespDto.type;
    /**
     * Data resource description
     */
    description?: string;
    /**
     * Array data resource node
     */
    struct: Array<string>;
    /**
     * Data resource permission operation list
     */
    actions: Array<string>;
};

export namespace CreateArrayDataResourceRespDto {

    /**
     * Data resource type, currently supports tree structure (TREE), string (STRING), array (ARRAY)
     */
    export enum type {
        TREE = 'TREE',
        STRING = 'STRING',
        ARRAY = 'ARRAY',
    }


}

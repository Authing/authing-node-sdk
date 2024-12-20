/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateStringDataResourceRespDto = {
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
    type: CreateStringDataResourceRespDto.type;
    /**
     * Data resource description
     */
    description?: string;
    /**
     * String data resource node
     */
    struct: string;
    /**
     * Data resource permission operation list
     */
    actions: Array<string>;
};

export namespace CreateStringDataResourceRespDto {

    /**
     * Data resource type, currently supports tree structure (TREE), string (STRING), and array (ARRAY)
     */
    export enum type {
        TREE = 'TREE',
        STRING = 'STRING',
        ARRAY = 'ARRAY',
    }


}

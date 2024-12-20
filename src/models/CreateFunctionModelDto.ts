/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateFunctionModelDto = {
    /**
     * Parent menu
     */
    parentKey: string;
    /**
     * Whether the function is enabled:
     * - true: enabled
     * - false: disable
     *
     */
    enable: boolean | null;
    /**
     * Function type:
     * - user: user
     * - post: position
     * - group: user group
     * - ueba: ueba
     * - department: tree structure data
     * - organization: organization
     * - device: device
     * - custom: custom
     *
     */
    type: CreateFunctionModelDto.type;
    /**
     * Function description
     */
    description: string | null;
    /**
     * Function name
     */
    name: string;
    /**
     * Data type:
     * - list: list type data
     * - tree: tree structure data
     *
     */
    dataType?: CreateFunctionModelDto.dataType;
};

export namespace CreateFunctionModelDto {

    /**
     * Function type:
     * - user: user
     * - post: position
     * - group: user group
     * - ueba: ueba
     * - department: tree structure data
     * - organization: organization
     * - device: device
     * - custom: custom
     *
     */
    export enum type {
        UEBA = 'ueba',
        USER = 'user',
        POST = 'post',
        GROUP = 'group',
        DEPARTMENT = 'department',
        ORGANIZATION = 'organization',
        DEVICE = 'device',
        DEVICE_RELY = 'device_rely',
        CUSTOM = 'custom',
    }

    /**
     * Data type:
     * - list: list type data
     * - tree: tree structure data
     *
     */
    export enum dataType {
        LIST = 'list',
        TREE = 'tree',
    }


}

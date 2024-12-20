/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FunctionModelDto = {
    /**
     * function id
     */
    id: string;
    /**
     *User pool id
     */
    userPoolId: string;
    /**
     * Function name
     */
    name: string;
    /**
     * Function description
     */
    description: string;
    /**
     *Data type:
     * - list: list type data.
     * - tree: tree structure data.
     *
     */
    dataType: FunctionModelDto.dataType;
    /**
     * Whether the function is enabled:
     * - true: enable
     * - false: disable
     *
     */
    enable: boolean;
    /**
     * Parent menu
     */
    parentKey: string;
    /**
     * Creation time
     */
    createdAt: string;
    /**
     * Update time
     */
    updatedAt: string;
    /**
     * Function type:
     * - user: user
     * - post: position
     * - group: user group
     * - ueba: ueba
     * - department: tree structure data
     * - organization: organization
     * - device: device
     * - device_rely: device
     * - custom: custom
     *
     */
    type: FunctionModelDto.type;
    /**
     * Field sorting
     */
    fieldOrder: string;
    /**
     *Details page configuration
     */
    config: any;
};

export namespace FunctionModelDto {

    /**
     *Data type:
     * - list: list type data.
     * - tree: tree structure data.
     *
     */
    export enum dataType {
        LIST = 'list',
        TREE = 'tree',
    }

    /**
     * Function type:
     * - user: user
     * - post: position
     * - group: user group
     * - ueba: ueba
     * - department: tree structure data
     * - organization: organization
     * - device: device
     * - device_rely: device
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


}

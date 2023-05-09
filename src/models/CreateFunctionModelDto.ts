/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateFunctionModelDto = {
    /**
     * 功能名称
     */
    name: string;
    /**
     * 功能描述
     */
    description: string | null;
    /**
     * 功能类型
     */
    type: CreateFunctionModelDto.type;
    /**
     * 功能是否启用
     */
    enable: boolean | null;
    /**
     * 上级菜单
     */
    parentKey: string;
};

export namespace CreateFunctionModelDto {

    /**
     * 功能类型
     */
    export enum type {
        UEBA = 'ueba',
        USER = 'user',
        POST = 'post',
        GROUP = 'group',
        DEPARTMENT = 'department',
        ORGANIZATION = 'organization',
        CUSTOM = 'custom',
    }


}

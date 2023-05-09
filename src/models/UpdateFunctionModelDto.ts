/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateFunctionModelDto = {
    /**
     * 功能 id
     */
    id: string;
    /**
     * 功能名称
     */
    name: string;
    /**
     * 功能描述
     */
    description: string | null;
    /**
     * 功能是否启用
     */
    enable: boolean;
    /**
     * 父级菜单
     */
    parentKey: string;
    /**
     * 功能类型
     */
    type: UpdateFunctionModelDto.type;
    /**
     * 字段序
     */
    fieldOrder: string;
    /**
     * 详情页配置
     */
    config: any;
};

export namespace UpdateFunctionModelDto {

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

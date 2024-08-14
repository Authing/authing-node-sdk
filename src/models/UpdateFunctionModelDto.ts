/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateFunctionModelDto = {
    /**
     * 展示字段 key
     */
    showFieldKey: string;
    /**
     * 详情页配置
     */
    config: any;
    /**
     * 字段序
     */
    fieldOrder: string;
    /**
     * 功能类型
     */
    type: UpdateFunctionModelDto.type;
    /**
     * 父级菜单
     */
    parentKey: string;
    /**
     * 功能是否启用
     */
    enable: boolean;
    /**
     * 功能描述
     */
    description: string | null;
    /**
     * 功能名称
     */
    name: string;
    /**
     * 功能 id
     */
    id: string;
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
        DEVICE = 'device',
        DEVICE_RELY = 'device_rely',
        CUSTOM = 'custom',
    }


}

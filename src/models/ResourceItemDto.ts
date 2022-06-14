/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ResourceItemDto = {
    /**
     * 资源唯一标志符
     */
    code: string;
    /**
     * 资源定义的操作类型
     */
    actions: Array<string>;
    /**
     * 资源类型，如数据、API、按钮、菜单
     */
    resourceType: ResourceItemDto.resourceType;
};

export namespace ResourceItemDto {

    /**
     * 资源类型，如数据、API、按钮、菜单
     */
    export enum resourceType {
        DATA = 'DATA',
        API = 'API',
        MENU = 'MENU',
        BUTTON = 'BUTTON',
    }


}

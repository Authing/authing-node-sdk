/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResourceAction } from './ResourceAction';

export type UpdateResourceDto = {
    /**
     * 资源定义的操作类型
     */
    actions: Array<ResourceAction>;
    /**
     * 资源类型，如数据、API、按钮、菜单
     */
    type: UpdateResourceDto.type;
    /**
     * 资源唯一标志符
     */
    code: string;
    /**
     * 资源描述
     */
    description?: string;
    /**
     * API 资源的 URL 标识
     */
    apiIdentifier?: string;
    /**
     * 所属权限分组的 code
     */
    namespace?: string;
};

export namespace UpdateResourceDto {

    /**
     * 资源类型，如数据、API、按钮、菜单
     */
    export enum type {
        DATA = 'DATA',
        API = 'API',
        MENU = 'MENU',
        BUTTON = 'BUTTON',
    }


}

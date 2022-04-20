/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListResourcesOptionsDto } from './ListResourcesOptionsDto';

export type ListResourcesDto = {
    /**
     * 所属权限分组的 code
     */
    namespace?: string;
    /**
     * 资源类型
     */
    type?: ListResourcesDto.type;
    /**
     * 可选参数
     */
    options?: ListResourcesOptionsDto;
};

export namespace ListResourcesDto {

    /**
     * 资源类型
     */
    export enum type {
        DATA = 'DATA',
        API = 'API',
        MENU = 'MENU',
        BUTTON = 'BUTTON',
    }


}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetAuthorizedResourceActionDto } from './GetAuthorizedResourceActionDto';

export type GetAuthorizedTargetsDto = {
    /**
     * 资源
     */
    resource: string;
    /**
     * 权限分组
     */
    namespace?: string;
    /**
     * 资源类型
     */
    resourceType?: GetAuthorizedTargetsDto.resourceType;
    /**
     * 主体类型
     */
    targetType?: GetAuthorizedTargetsDto.targetType;
    /**
     * Action 列表
     */
    actions?: GetAuthorizedResourceActionDto;
};

export namespace GetAuthorizedTargetsDto {

    /**
     * 资源类型
     */
    export enum resourceType {
        DATA = 'DATA',
        API = 'API',
        MENU = 'MENU',
        BUTTON = 'BUTTON',
        UI = 'UI',
    }

    /**
     * 主体类型
     */
    export enum targetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        DEPARTMENT = 'DEPARTMENT',
    }


}

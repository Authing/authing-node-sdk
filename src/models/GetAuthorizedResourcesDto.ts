/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetAuthorizedResourcesDto = {
    /**
     * 目标对象唯一标志符
     */
    targetIdentifier: string;
    /**
     * 目标对象类型
     */
    targetType: GetAuthorizedResourcesDto.targetType;
    /**
     * 所属权限分组的 code
     */
    namespace?: string;
    /**
     * 资源类型，如数据、API、按钮、菜单
     */
    resourceType?: GetAuthorizedResourcesDto.resourceType;
};

export namespace GetAuthorizedResourcesDto {

    /**
     * 目标对象类型
     */
    export enum targetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        DEPARTMENT = 'DEPARTMENT',
    }

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

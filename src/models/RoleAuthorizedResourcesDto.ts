/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RoleAuthorizedResourcesDto = {
    /**
     * 分组 code，识别码
     */
    code: string;
    /**
     * 权限分组
     */
    namespace?: string;
    /**
     * 资源类型
     */
    resourceType?: RoleAuthorizedResourcesDto.resourceType;
};

export namespace RoleAuthorizedResourcesDto {

    /**
     * 资源类型
     */
    export enum resourceType {
        DATA = 'DATA',
        API = 'API',
        MENU = 'MENU',
        BUTTON = 'BUTTON',
    }


}

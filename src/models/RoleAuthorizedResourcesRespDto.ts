/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RoleAuthorizedResourcesRespDto = {
    /**
     * 资源描述符
     */
    resourceCode: string;
    /**
     * 资源类型
     */
    resourceType: RoleAuthorizedResourcesRespDto.resourceType;
    /**
     * 被授权的操作列表
     */
    actions: Array<string>;
    /**
     * 资源对应的 API Identifier
     */
    apiIdentifier: string;
};

export namespace RoleAuthorizedResourcesRespDto {

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

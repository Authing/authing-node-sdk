/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetGroupAuthorizedResourcesDto = {
    /**
     * 分组 code
     */
    code: string;
    /**
     * 权限分组的 code
     */
    namespace?: string;
    /**
     * 资源类型
     */
    resourceType?: GetGroupAuthorizedResourcesDto.resourceType;
};

export namespace GetGroupAuthorizedResourcesDto {

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

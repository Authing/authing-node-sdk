/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetUserAuthorizedResourcesOptionsDto = {
    /**
     * 权限分组的 code
     */
    namespace?: string;
    /**
     * 资源类型
     */
    resourceType?: GetUserAuthorizedResourcesOptionsDto.resourceType;
};

export namespace GetUserAuthorizedResourcesOptionsDto {

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

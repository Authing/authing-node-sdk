/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AuthorizedResourceDto = {
    /**
     * 资源标识符
     */
    resourceCode: string;
    /**
     * 资源类型
     */
    resourceType?: AuthorizedResourceDto.resourceType;
    /**
     * 被授权的资源的操作列表
     */
    actions?: Array<string>;
    /**
     * 资源对应的 API Identifier
     */
    apiIdentifier?: string;
};

export namespace AuthorizedResourceDto {

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

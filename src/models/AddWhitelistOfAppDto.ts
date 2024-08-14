/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AddWhitelistOfAppDto = {
    /**
     * APP ID
     */
    appId: string;
    /**
     * 白名单类型
     */
    type: AddWhitelistOfAppDto.type;
    /**
     * 类型参数
     */
    list?: Array<string>;
};

export namespace AddWhitelistOfAppDto {

    /**
     * 白名单类型
     */
    export enum type {
        USERNAME = 'USERNAME',
        EMAIL = 'EMAIL',
        PHONE = 'PHONE',
    }


}

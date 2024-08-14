/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteWhitelistOfAppDto = {
    /**
     * 白名单类型
     */
    type: DeleteWhitelistOfAppDto.type;
    /**
     * APP ID
     */
    appId: string;
    /**
     * 类型参数
     */
    list?: Array<string>;
};

export namespace DeleteWhitelistOfAppDto {

    /**
     * 白名单类型
     */
    export enum type {
        USERNAME = 'USERNAME',
        EMAIL = 'EMAIL',
        PHONE = 'PHONE',
    }


}

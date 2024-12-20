/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteWhitelistOfAppDto = {
    /**
     * Whitelist type
     */
    type: DeleteWhitelistOfAppDto.type;
    /**
     * APP ID
     */
    appId: string;
    /**
     *Type parameters
     */
    list?: Array<string>;
};

export namespace DeleteWhitelistOfAppDto {

    /**
     * Whitelist type
     */
    export enum type {
        USERNAME = 'USERNAME',
        EMAIL = 'EMAIL',
        PHONE = 'PHONE',
    }


}

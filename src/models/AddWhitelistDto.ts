/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AddWhitelistDto = {
    /**
     * 白名单类型
     */
    type: AddWhitelistDto.type;
    /**
     * 类型参数
     */
    list?: Array<string>;
};

export namespace AddWhitelistDto {

    /**
     * 白名单类型
     */
    export enum type {
        USERNAME = 'USERNAME',
        EMAIL = 'EMAIL',
        PHONE = 'PHONE',
    }


}

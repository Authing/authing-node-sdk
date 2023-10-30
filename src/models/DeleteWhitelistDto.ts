/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteWhitelistDto = {
    /**
     * 白名单类型
     */
    type: DeleteWhitelistDto.type;
    /**
     * 类型参数
     */
    list?: Array<string>;
};

export namespace DeleteWhitelistDto {

    /**
     * 白名单类型
     */
    export enum type {
        USERNAME = 'USERNAME',
        EMAIL = 'EMAIL',
        PHONE = 'PHONE',
    }


}

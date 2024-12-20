/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteWhitelistDto = {
    /**
     * Whitelist type
     */
    type: DeleteWhitelistDto.type;
    /**
     *Type parameters
     */
    list?: Array<string>;
};

export namespace DeleteWhitelistDto {

    /**
     * Whitelist type
     */
    export enum type {
        USERNAME = 'USERNAME',
        EMAIL = 'EMAIL',
        PHONE = 'PHONE',
    }


}

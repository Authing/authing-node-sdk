/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetUserSelectLoginPublicAccountsOriginUserDto = {
    /**
     *Account ID
     */
    userId: string;
    /**
     * Account avatar
     */
    avatar?: string;
    /**
     * display name
     */
    displayName?: string;
    /**
     * User type: 1 individual user, 2 public account
     */
    usertype?: GetUserSelectLoginPublicAccountsOriginUserDto.usertype;
};

export namespace GetUserSelectLoginPublicAccountsOriginUserDto {

    /**
     * User type: 1 individual user, 2 public account
     */
    export enum usertype {
        _1 = '1',
        _2 = '2',
    }


}

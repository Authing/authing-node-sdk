/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetUserSelectLoginPublicAccountsOriginUserDto = {
    /**
     * 账号 ID
     */
    userId: string;
    /**
     * 账号头像
     */
    avatar?: string;
    /**
     * 显示名称
     */
    displayName?: string;
    /**
     * 用户类型：1 个人用户，2 公共账号
     */
    usertype?: GetUserSelectLoginPublicAccountsOriginUserDto.usertype;
};

export namespace GetUserSelectLoginPublicAccountsOriginUserDto {

    /**
     * 用户类型：1 个人用户，2 公共账号
     */
    export enum usertype {
        _1 = '1',
        _2 = '2',
    }


}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetUserSelectLoginPublicAccountsOriginUserDto } from './GetUserSelectLoginPublicAccountsOriginUserDto';
import type { ListPublicAccountDataDto } from './ListPublicAccountDataDto';

export type GetUserSelectLoginPublicAccountsDataDto = {
    /**
     * 公共账号列表
     */
    publicAccounts: Array<ListPublicAccountDataDto>;
    /**
     * 个人账号信息
     */
    originUser?: GetUserSelectLoginPublicAccountsOriginUserDto;
};

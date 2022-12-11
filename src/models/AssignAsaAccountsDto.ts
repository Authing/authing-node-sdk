/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssignAsaAccountItem } from './AssignAsaAccountItem';

export type AssignAsaAccountsDto = {
    /**
     * 所属应用 ID
     */
    appId: string;
    /**
     * 要关联的账号 ID
     */
    accountId: string;
    /**
     * 关联对象列表
     */
    targets: Array<AssignAsaAccountItem>;
};

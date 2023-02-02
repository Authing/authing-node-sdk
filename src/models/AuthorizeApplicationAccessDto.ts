/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationPermissionRecordItem } from './ApplicationPermissionRecordItem';

export type AuthorizeApplicationAccessDto = {
    /**
     * 应用 ID
     */
    appId: string;
    /**
     * 授权主体列表，最多 10 条
     */
    list: Array<ApplicationPermissionRecordItem>;
};

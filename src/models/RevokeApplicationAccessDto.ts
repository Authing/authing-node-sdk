/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeleteApplicationPermissionRecordItem } from './DeleteApplicationPermissionRecordItem';

export type RevokeApplicationAccessDto = {
    /**
     * 应用 ID
     */
    appId: string;
    /**
     * 授权主体列表，最多 10 条
     */
    list: Array<DeleteApplicationPermissionRecordItem>;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeleteApplicationPermissionRecordItem } from './DeleteApplicationPermissionRecordItem';

export type DeleteApplicationPermissionRecord = {
    /**
     * Authorization subject list, up to 10 items
     */
    list: Array<DeleteApplicationPermissionRecordItem>;
    /**
     * Application ID
     */
    appId: string;
};

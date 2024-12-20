/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationPermissionRecordItem } from './ApplicationPermissionRecordItem';

export type AuthorizeApplicationAccessDto = {
    /**
     * Application ID
     */
    appId: string;
    /**
     * List of authorized subjects, up to 10 items
     */
    list: Array<ApplicationPermissionRecordItem>;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExtraParams } from './ExtraParams';

export type CreateApprovalReq = {
    /**
     * Initiate approval object type, currently supports: application permission application (APP_PERMISSION_APPLY), role permission application (ROLE_PERMISSION_APPLY)
     */
    objectType: CreateApprovalReq.objectType;
    /**
     * Initiate approval object ID, currently supports: role ID, application ID
     */
    objectId: string;
    /**
     * Additional parameters, currently only supported: role permission application (ROLE_PERMISSION_APPLY)
     */
    extraParams?: ExtraParams;
};

export namespace CreateApprovalReq {

    /**
     * Initiate approval object type, currently supports: application permission application (APP_PERMISSION_APPLY), role permission application (ROLE_PERMISSION_APPLY)
     */
    export enum objectType {
        APP_PERMISSION_APPLY = 'APP_PERMISSION_APPLY',
        ROLE_PERMISSION_APPLY = 'ROLE_PERMISSION_APPLY',
    }


}

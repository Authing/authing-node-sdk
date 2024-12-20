/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetPushCodeRelationAppsDto = {
    /**
     * Application ID that initiates push login
     */
    appId: string;
    /**
     * Push code (push login unique ID)
     */
    pushCodeId: string;
};

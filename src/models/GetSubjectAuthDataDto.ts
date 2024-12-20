/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetSubjectAuthDataDto = {
    /**
     * Application ID
     */
    appId: string;
    /**
     * Application name
     */
    appName: string;
    /**
     * Requested subject id
     */
    reqTargetId: string;
    /**
     * Requested subject name
     */
    reqTargetName: string;
    /**
     * Request body type
     */
    reqTargetType: GetSubjectAuthDataDto.reqTargetType;
    /**
     * Target subject type
     */
    targetType: GetSubjectAuthDataDto.targetType;
    /**
     * Target subject name
     */
    targetName: string;
    /**
     * Authorization type
     */
    authType: GetSubjectAuthDataDto.authType;
};

export namespace GetSubjectAuthDataDto {

    /**
     * Request body type
     */
    export enum reqTargetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        ORG = 'ORG',
        AK_SK = 'AK_SK',
    }

    /**
     * Target subject type
     */
    export enum targetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        ORG = 'ORG',
        AK_SK = 'AK_SK',
    }

    /**
     * Authorization type
     */
    export enum authType {
        DEFAULT = 'DEFAULT',
        ALL = 'ALL',
        SELF = 'SELF',
        SUBJECT = 'SUBJECT',
    }


}

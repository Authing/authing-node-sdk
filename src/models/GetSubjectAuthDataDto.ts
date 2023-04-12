/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetSubjectAuthDataDto = {
    /**
     * 应用 ID
     */
    appId: string;
    /**
     * 应用名称
     */
    appName: string;
    /**
     * 请求的主体id
     */
    reqTargetId: string;
    /**
     * 请求的主体名称
     */
    reqTargetName: string;
    /**
     * 请求的主体类型
     */
    reqTargetType: GetSubjectAuthDataDto.reqTargetType;
    /**
     * 目标主体类型
     */
    targetType: GetSubjectAuthDataDto.targetType;
    /**
     * 目标主体名称
     */
    targetName: string;
    /**
     * 授权类型
     */
    authType: GetSubjectAuthDataDto.authType;
};

export namespace GetSubjectAuthDataDto {

    /**
     * 请求的主体类型
     */
    export enum reqTargetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        ORG = 'ORG',
        AK_SK = 'AK_SK',
    }

    /**
     * 目标主体类型
     */
    export enum targetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        ORG = 'ORG',
        AK_SK = 'AK_SK',
    }

    /**
     * 授权类型
     */
    export enum authType {
        DEFAULT = 'DEFAULT',
        ALL = 'ALL',
        SELF = 'SELF',
        SUBJECT = 'SUBJECT',
    }


}

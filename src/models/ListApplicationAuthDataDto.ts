/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListApplicationAuthDataDto = {
    /**
     *Authorization id
     */
    id: string;
    /**
     * Subject id
     */
    targetId: string;
    /**
     * Subject name
     */
    targetName: string;
    /**
     * Principal type, USER/ORG/GROUP/ROLE
     */
    targetType: ListApplicationAuthDataDto.targetType;
    /**
     * Subject type, ALLOW/DENY
     */
    effect: ListApplicationAuthDataDto.effect;
    /**
     * Authorization switch
     */
    enabled: boolean;
    /**
     * Authorization type, ALL: everyone SUBJECT: subject
     */
    permissionType: ListApplicationAuthDataDto.permissionType;
};

export namespace ListApplicationAuthDataDto {

    /**
     * Principal type, USER/ORG/GROUP/ROLE
     */
    export enum targetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        ORG = 'ORG',
        AK_SK = 'AK_SK',
    }

    /**
     * Subject type, ALLOW/DENY
     */
    export enum effect {
        ALLOW = 'ALLOW',
        DENY = 'DENY',
    }

    /**
     * Authorization type, ALL: everyone SUBJECT: subject
     */
    export enum permissionType {
        ALL = 'ALL',
        SUBJECT = 'SUBJECT',
    }


}

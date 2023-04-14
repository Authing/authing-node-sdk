/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListApplicationAuthDataDto = {
    /**
     * 授权 id
     */
    id: string;
    /**
     * 主体 id
     */
    targetId: string;
    /**
     * 主体名称
     */
    targetName: string;
    /**
     * 主体类型，USER/ORG/GROUP/ROLE
     */
    targetType: ListApplicationAuthDataDto.targetType;
    /**
     * 主体类型，ALLOW/DENY
     */
    effect: ListApplicationAuthDataDto.effect;
    /**
     * 授权开关
     */
    enabled: boolean;
    /**
     * 授权类型, ALL:所有人 SUBJECT:主体
     */
    permissionType: ListApplicationAuthDataDto.permissionType;
};

export namespace ListApplicationAuthDataDto {

    /**
     * 主体类型，USER/ORG/GROUP/ROLE
     */
    export enum targetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        ORG = 'ORG',
        AK_SK = 'AK_SK',
    }

    /**
     * 主体类型，ALLOW/DENY
     */
    export enum effect {
        ALLOW = 'ALLOW',
        DENY = 'DENY',
    }

    /**
     * 授权类型, ALL:所有人 SUBJECT:主体
     */
    export enum permissionType {
        ALL = 'ALL',
        SUBJECT = 'SUBJECT',
    }


}

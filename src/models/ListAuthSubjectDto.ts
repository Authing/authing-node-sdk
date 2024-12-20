/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListAuthSubjectDto = {
    /**
     * Subject type
     */
    targetType: ListAuthSubjectDto.targetType;
    /**
     * Subject id
     */
    targetId: string;
    /**
     * Application name
     */
    appName?: string;
    /**
     * List of application types
     */
    appTypeList?: Array<string>;
    /**
     * List of operation types
     */
    effect?: Array<string>;
    /**
     * switch
     */
    enabled?: boolean;
};

export namespace ListAuthSubjectDto {

    /**
     * Subject type
     */
    export enum targetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        ORG = 'ORG',
        AK_SK = 'AK_SK',
    }


}

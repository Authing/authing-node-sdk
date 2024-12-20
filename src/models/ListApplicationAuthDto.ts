/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListApplicationAuthDto = {
    /**
     * Application ID
     */
    appId: string;
    /**
     * Current page number, starting from 1
     */
    page?: number;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: number;
    /**
     * Subject name
     */
    targetName?: string;
    /**
     * List of principal types, USER/ORG/ROLE/GROUP
     */
    targetTypeList?: Array<string>;
    /**
     * Operation, ALLOW/DENY
     */
    effect?: ListApplicationAuthDto.effect;
    /**
     * Whether the authorization is valid switch,
     */
    enabled?: boolean;
};

export namespace ListApplicationAuthDto {

    /**
     * Operation, ALLOW/DENY
     */
    export enum effect {
        ALLOW = 'ALLOW',
        DENY = 'DENY',
    }


}

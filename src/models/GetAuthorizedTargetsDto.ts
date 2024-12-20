/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetAuthorizedResourceActionDto } from './GetAuthorizedResourceActionDto';

export type GetAuthorizedTargetsDto = {
    /**
     * Resource
     */
    resource: string;
    /**
     * Permission namespace
     */
    namespace?: string;
    /**
     * Resource type
     */
    resourceType?: GetAuthorizedTargetsDto.resourceType;
    /**
     * Subject type
     */
    targetType?: GetAuthorizedTargetsDto.targetType;
    /**
     * Action list
     */
    actions?: GetAuthorizedResourceActionDto;
};

export namespace GetAuthorizedTargetsDto {

    /**
     * Resource Type
     */
    export enum resourceType {
        DATA = 'DATA',
        API = 'API',
        MENU = 'MENU',
        BUTTON = 'BUTTON',
        UI = 'UI',
    }

    /**
     * Subject Type
     */
    export enum targetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        DEPARTMENT = 'DEPARTMENT',
    }


}

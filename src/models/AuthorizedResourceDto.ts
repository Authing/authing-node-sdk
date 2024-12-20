/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PolicyCondition } from './PolicyCondition';

export type AuthorizedResourceDto = {
    /**
     * Resource descriptor
     */
    resourceCode: string;
    /**
     * Resource description information
     */
    description?: string;
    /**
     * Strategy Condition
     */
    condition?: Array<PolicyCondition>;
    /**
     * Resource type
     */
    resourceType: AuthorizedResourceDto.resourceType;
    /**
     * API URL
     */
    apiIdentifier: string;
    /**
     * Authorized operation list
     */
    actions: Array<string>;
    /**
     * Allow or deny
     */
    effect: AuthorizedResourceDto.effect;
};

export namespace AuthorizedResourceDto {

    /**
     * Resource type
     */
    export enum resourceType {
        DATA = 'DATA',
        API = 'API',
        MENU = 'MENU',
        BUTTON = 'BUTTON',
        UI = 'UI',
    }

    /**
     * Allow or deny
     */
    export enum effect {
        ALLOW = 'ALLOW',
        DENY = 'DENY',
    }


}

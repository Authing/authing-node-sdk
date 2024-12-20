/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResourceAction } from './ResourceAction';

export type CreateResourceDto = {
    /**
     * Resource type, such as data, API, button, menu
     */
    type: CreateResourceDto.type;
    /**
     * Resource unique identifier
     */
    code: string;
    /**
     * Resource description
     */
    description?: string;
    /**
     * Resource name
     */
    name?: string;
    /**
     * Operation type defined by the resource
     */
    actions?: Array<ResourceAction>;
    /**
     * URL identifier of the API resource
     */
    apiIdentifier?: string;
    /**
     * The Code of the permission group (permission space) to which it belongs is not passed to obtain the default permission group.
     */
    namespace?: string;
};

export namespace CreateResourceDto {

    /**
     * Resource type, such as data, API, button, menu
     */
    export enum type {
        DATA = 'DATA',
        API = 'API',
        MENU = 'MENU',
        BUTTON = 'BUTTON',
        UI = 'UI',
    }


}

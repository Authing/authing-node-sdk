/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResourceAction } from './ResourceAction';

export type CreateResourceBatchItemDto = {
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
     * Resource type, such as data, API, button, menu
     */
    type: CreateResourceBatchItemDto.type;
    /**
     * Operation type defined by the resource
     */
    actions?: Array<ResourceAction>;
    /**
     * URL identifier of the API resource
     */
    apiIdentifier?: string;
};

export namespace CreateResourceBatchItemDto {

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

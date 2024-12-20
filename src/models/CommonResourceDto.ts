/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResourceAction } from './ResourceAction';

export type CommonResourceDto = {
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
    type: CommonResourceDto.type;
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
    /**
     * Whether the tenant application is associated with self-built application resources
     */
    linkedToTenant?: boolean;
    /**
     * Resource id
     */
    id: string;
    /**
     * Permission application id
     */
    namespaceId: number;
    /**
     * Permission application name
     */
    namespaceName: string;
    /**
     *UserPool ID
     */
    userPoolId: string;
    /**
     * Creation time
     */
    createdAt: string;
    /**
     * Update time
     */
    updatedAt: string;
};

export namespace CommonResourceDto {

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

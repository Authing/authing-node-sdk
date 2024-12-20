/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResourceItemDto } from './ResourceItemDto';

export type AuthorizeResourceItem = {
    /**
     * Target object type:
     * - `USER`: user
     * - `ROLE`: role
     * - `GROUP`: group
     * - `DEPARTMENT`: department
     *
     */
    targetType: AuthorizeResourceItem.targetType;
    /**
     * Unique identifier of the target object:
     * - If it is a user, it is the user's ID, such as `6343b98b7cfxxx9366e9b7c`
     * - If it is a role, it is the code of the role, such as `admin`
     * - If it is a group, it is the code of the group, such as `developer`
     * - If it is a department, it is the ID of the department, such as `6343bafc019xxxx889206c4c`
     *
     */
    targetIdentifiers: Array<string>;
    /**
     * Authorized resource list
     */
    resources: Array<ResourceItemDto>;
};

export namespace AuthorizeResourceItem {

    /**
     * Target object type:
     * - `USER`: user
     * - `ROLE`: role
     * - `GROUP`: group
     * - `DEPARTMENT`: department
     *
     */
    export enum targetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        DEPARTMENT = 'DEPARTMENT',
    }


}

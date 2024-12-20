/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetResourceAuthorizedTargetsDto = {
    /**
     * resource
     */
    resource: string;
    /**
     * Permission grouping
     */
    namespace?: string;
    /**
     * Target object type:
     * - `USER`: user
     * - `ROLE`: role
     * - `GROUP`: group
     * - `DEPARTMENT`: department
     *
     */
    targetType?: GetResourceAuthorizedTargetsDto.targetType;
    /**
     * Current page number, starting from 1
     */
    page?: number;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: number;
};

export namespace GetResourceAuthorizedTargetsDto {

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

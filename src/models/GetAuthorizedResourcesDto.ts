/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * According to the filter conditions, obtain the list of resources authorized by a subject.
 */
export type GetAuthorizedResourcesDto = {
    /**
     * Target object type:
     * - `USER`: user
     * - `ROLE`: role
     * - `GROUP`: group
     * - `DEPARTMENT`: department
     *
     */
    targetType?: any;
    /**
     * Unique identifier of the target object:
     * - If it is a user, it is the user's ID, such as `6343b98b7cfxxx9366e9b7c`
     * - If it is a role, it is the code of the role, such as `admin`
     * - If it is a group, it is the code of the group, such as `developer`
     * - If it is a department, it is the ID of the department, such as `6343bafc019xxxx889206c4c`
     *
     */
    targetIdentifier?: any;
    /**
     * The Code of the permission group (permission space) to which it belongs is not passed to obtain the default permission group.
     */
    namespace?: any;
    /**
     * Limit resource types, such as data, API, buttons, menus
     */
    resourceType?: any;
    /**
     * Limit the resource list of the query. If specified, only the specified resource list will be returned.
     *
     * The resourceList parameter supports prefix matching, for example:
     * - Authorizes a resource as `books:123`, which can be matched by `books:*`;
     * - Authorizes a resource as `books:fictions_123`, which can be matched by `books:fictions_`;
     *
     */
    resourceList?: any;
    /**
     * Whether to obtain rejected resources
     */
    withDenied?: any;
};

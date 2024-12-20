/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Obtain custom field values of users, groups, roles, and organizations through filter conditions.
 */
export type GetCustomDataDto = {
    /**
     * Tenant ID
     */
    tenantId?: any;
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
     * The code of the permission group to which it belongs needs to be filled in when targetType is role, otherwise it can be ignored
     */
    namespace?: any;
};

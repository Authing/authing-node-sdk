/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteRoleDto = {
    /**
     * Role code list
     */
    codeList: Array<string>;
    /**
     * The code of the permission group (permission space) to which it belongs is not passed to obtain the default permission group.
     */
    namespace?: string;
};

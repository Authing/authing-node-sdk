/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteApplicationPermissionRecordItem = {
    /**
     * Subject type
     */
    targetType: DeleteApplicationPermissionRecordItem.targetType;
    /**
     * Permission group code, must be passed when the subject type is "ROLE"
     */
    namespaceCode?: string;
    /**
     * List of subject identifiers. When the subject type is "USER", the value should be the user ID; when the subject type is "GROUP", the value should be the group code; when the subject type is "ROLE", the value should be the role code; when the subject type is "ORG", the value should be the organization node ID. Maximum 50 entries.
     */
    targetIdentifier: Array<string>;
};

export namespace DeleteApplicationPermissionRecordItem {

    /**
     * Subject type
     */
    export enum targetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        ORG = 'ORG',
    }


}

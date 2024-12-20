/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteCustomFieldDto = {
    /**
     * Subject type, currently supports users, roles, groups and departments
     */
    targetType: DeleteCustomFieldDto.targetType;
    /**
     * The field key cannot conflict with the key of the built-in field. **It cannot be modified after it is set**.
     */
    key: string;
};

export namespace DeleteCustomFieldDto {

    /**
     * Subject type, currently supports users, roles, groups and departments
     */
    export enum targetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        DEPARTMENT = 'DEPARTMENT',
    }


}

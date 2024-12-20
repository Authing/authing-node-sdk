/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomFieldI18n } from './CustomFieldI18n';
import type { CustomFieldSelectOption } from './CustomFieldSelectOption';

export type CustomFieldDto = {
    /**
     * Target object type:
     * - `USER`: user
     * - `ROLE`: role
     * - `GROUP`: group
     * - `DEPARTMENT`: department
     *
     */
    targetType: CustomFieldDto.targetType;
    /**
     * Creation time is only valid for custom fields. Built-in fields have no creation time.
     */
    createdAt?: string;
    /**
     * Data type, **cannot be modified after setting**.
     * - `STRING`: string type
     * - `NUMBER`: numeric type
     * - `DATETIME`: date type
     * - `BOOLEAN`: Boolean type
     * - `ENUM`: enumeration value type
     *
     */
    dataType: CustomFieldDto.dataType;
    /**
     * The field key cannot conflict with the key of the built-in field. **It cannot be modified after it is set**.
     */
    key: string;
    /**
     * display name
     */
    label: string;
    /**
     * Detailed description information
     */
    description?: string;
    /**
     * Whether to encrypt storage. When turned on, the **new data** in this field will be encrypted. Once this parameter is set, it cannot be changed.
     */
    encrypted?: boolean;
    /**
     * Whether it is a unique field. After turning it on, the value reported by the current field will be uniquely verified. This parameter is only valid for fields whose data type is string and number.
     */
    isUnique: boolean;
    /**
     * Whether the user can edit it. If it is a special field such as mobile phone number, email address, etc., the user cannot modify it directly. It needs to be verified through verification code or other methods first.
     */
    userEditable?: boolean;
    /**
     * Whether it needs to be displayed in the Authing console:
     * - If it is a user-defined field, control whether it is displayed in user details;
     * - If it is a department custom field, control whether it is displayed in department details;
     * - If it is a role extension field, control whether it is displayed in the role details.
     *
     */
    visibleInAdminConsole: boolean;
    /**
     * Whether to display in the user's personal center (this parameter does not control whether the API interface returns).
     */
    visibleInUserCenter?: boolean;
    /**
     *Multi-language display name
     */
    i18n?: CustomFieldI18n;
    /**
     * Enumeration value type options
     */
    options?: Array<CustomFieldSelectOption>;
};

export namespace CustomFieldDto {

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

    /**
     * Data type, **cannot be modified after setting**.
     * - `STRING`: string type
     * - `NUMBER`: numeric type
     * - `DATETIME`: date type
     * - `BOOLEAN`: Boolean type
     * - `ENUM`: enumeration value type
     *
     */
    export enum dataType {
        STRING = 'STRING',
        NUMBER = 'NUMBER',
        DATETIME = 'DATETIME',
        BOOLEAN = 'BOOLEAN',
        ENUM = 'ENUM',
    }


}

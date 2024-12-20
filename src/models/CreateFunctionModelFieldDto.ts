/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Condition } from './Condition';
import type { DropDownItemDto } from './DropDownItemDto';

export type CreateFunctionModelFieldDto = {
    /**
     * Whether the user center is displayed is only meaningful under the user module:
     * - true: User center display
     * - false: User center does not display
     *
     */
    userVisible: boolean;
    /**
     * Optional range of associated data
     */
    relationOptionalRange: Condition;
    /**
     * Attributes to be displayed in associated data
     */
    relationShowKey: string;
    /**
     * Whether the association is 1-N:
     * - true: It is a 1-N relationship
     * - false: Not a 1-N relationship
     *
     */
    relationMultiple: boolean;
    /**
     * Association type
     */
    relationType: string;
    /**
     * Whether it can be used for login, only meaningful under the user module:
     * - true: used for login
     * - false: not used for login
     *
     */
    forLogin: boolean;
    /**
     * Whether to support fuzzy search:
     * - true: support fuzzy search
     * - false: fuzzy search is not supported
     *
     */
    fuzzySearch: boolean;
    /**
     * Drop down menu options
     */
    dropDown: DropDownItemDto;
    /**
     * Front-end formatting display rules:
     */
    format: number;
    /**
     * Verification matching rules for strings
     */
    regexp: string;
    /**
     * If the type is a number, it represents the lower limit of the number. If the type is a date, it represents the starting date.
     */
    min: number;
    /**
     * If the type is a number, it means the upper limit of the number. If the type is a date, it means the end date.
     */
    max: number;
    /**
     * String length limit
     */
    maxLength: number;
    /**
     * Is it unique:
     * - true: unique
     * - false: not unique
     *
     */
    unique: boolean;
    /**
     * Is it required:
     * - true: required
     * - false: no need to fill in
     *
     */
    require: boolean;
    /**
     * default value
     */
    default: any;
    /**
     * Help instructions
     */
    help: string;
    /**
     * Whether editable:
     * - true: editable
     * - false: not editable
     *
     */
    editable: boolean;
    /**
     * Whether to display:
     * - true: display
     * - false: do not display
     *
     */
    show: boolean;
    /**
     *Field type:
     * - 1: single line of text
     * - 2: multi-line text
     * - 3: Number
     * - 4: Boolean type
     * - 5: date
     * - 6: enumeration
     * - 7: Association type
     * - 8: Reverse correlation data display
     *
     */
    type: CreateFunctionModelFieldDto.type;
    /**
     * Field attribute name
     */
    key: string;
    /**
     *Field name
     */
    name: string;
    /**
     * function id
     */
    modelId: string;
};

export namespace CreateFunctionModelFieldDto {

    /**
     *Field type:
     * - 1: single line of text
     * - 2: multi-line text
     * - 3: Number
     * - 4: Boolean type
     * - 5: Date
     * - 6: enumeration
     * - 7: Association type
     * - 8: Reverse correlation data display
     *
     */
    export enum type {
        TEXT = 'Text',
        TEXTAREA = 'Textarea',
        NUMBER = 'Number',
        BOOLEAN = 'Boolean',
        DATE = 'Date',
        ENUM = 'Enum',
        RELATION = 'Relation',
        REVERSE_RELATION = 'ReverseRelation',
        ARRAY = 'Array',
    }


}

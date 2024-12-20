/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RelationOptionalRange } from './RelationOptionalRange';

export type FunctionModelFieldDto = {
    /**
     * field id
     */
    id: string;
    /**
     * function id
     */
    modelId: string;
    /**
     *Field name
     */
    name: string;
    /**
     * Field attribute name
     */
    key: string;
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
    type: number;
    /**
     * Whether to display:
     * - true: display
     * - false: do not display
     *
     */
    show: boolean;
    /**
     * Whether editable:
     * - true: editable
     * - false: not editable
     *
     */
    editable: boolean;
    /**
     * Help instructions
     */
    help: string;
    /**
     * default value
     */
    default: string;
    /**
     * Is it required:
     * - true: required
     * - false: no need to fill in
     *
     */
    require: boolean;
    /**
     * Is it unique:
     * - true: unique
     * - false: not unique
     *
     */
    unique: boolean;
    /**
     * String length limit
     */
    maxLength: number;
    /**
     * If the type is a number, it means the upper limit of the number, if the type is a date, it means the end date
     */
    max: number;
    /**
     * If the type is a number, it represents the lower limit of the number. If the type is a date, it represents the starting date.
     */
    min: number;
    /**
     * Verification matching rules for strings
     */
    regexp: string;
    /**
     * Front-end formatting display rules:
     */
    format: number;
    /**
     * Drop down menu options
     */
    dropDown: number;
    /**
     * Attributes to be displayed in associated data
     */
    relationType: string;
    /**
     * Whether the association is 1-N:
     * - true: It is a 1-N relationship
     * - false: Not a 1-N relationship
     *
     */
    relationMultiple: boolean;
    /**
     * Attributes to be displayed in associated data
     */
    relationShowKey: string;
    /**
     * Optional range of associated data
     */
    relationOptionalRange: RelationOptionalRange;
    /**
     * Whether the user center is displayed is only meaningful under the user module:
     * - true: User center display
     * - false: User center does not display
     *
     */
    userVisible: boolean;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Config } from './Config';

export type ExtendField = {
    /**
     * Unique identification of the field, length 1-64 characters, only allowed to contain English letters, numbers, underscore _, dollar sign $
     */
    key: string;
    /**
     *Field value type
     */
    valueType: ExtendField.valueType;
    /**
     * describe
     */
    description?: string;
    /**
     * Display name
     */
    label: string;
    /**
     * Field configuration, when valueType=SELECT, this parameter must be passed, otherwise it does not need to be passed
     */
    config?: Config;
};

export namespace ExtendField {

    /**
     *Field value type
     */
    export enum valueType {
        STRING = 'STRING',
        SELECT = 'SELECT',
    }


}

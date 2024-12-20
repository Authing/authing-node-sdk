/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Config } from './Config';

export type CreateDnefReq = {
    /**
     * Data resource Code, unique in the permission space
     */
    resourceCode: string;
    /**
     * The permission space code to which the data resource belongs
     */
    namespaceCode: string;
    /**
     * Display name
     */
    label: string;
    /**
     *Field value type
     */
    valueType: CreateDnefReq.valueType;
    /**
     * Unique identification of the field, length 1-64 characters, only allowed to contain English letters, numbers, underscore _, dollar sign $
     */
    key: string;
    /**
     * describe
     */
    description?: string;
    /**
     * Field configuration, when valueType=SELECT, this parameter must be passed, otherwise it does not need to be passed
     */
    config?: Config;
};

export namespace CreateDnefReq {

    /**
     *Field value type
     */
    export enum valueType {
        STRING = 'STRING',
        SELECT = 'SELECT',
    }


}

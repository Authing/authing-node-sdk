/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExtendField } from './ExtendField';

export type BatchCreateDnefReq = {
    /**
     * Data resource Code, unique in the permission space
     */
    resourceCode: string;
    /**
     * The permission space code to which the data resource belongs
     */
    namespaceCode: string;
    /**
     * Field list
     */
    fieldList: Array<ExtendField>;
};

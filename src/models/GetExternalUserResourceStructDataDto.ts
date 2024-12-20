/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArrResourceAuthAction } from './ArrResourceAuthAction';
import type { StrResourceAuthAction } from './StrResourceAuthAction';
import type {TreeResourceAuthAction} from './TreeResourceAuthAction';

export type GetExternalUserResourceStructDataDto = {
    /**
     * Permission space code
     */
    namespaceCode: string;
    /**
     * Data resource code
     */
    resourceCode: string;
    /**
     * Data resource types currently support three types: tree structure (TREE), string (STRING), and array (ARRAY). Different structures are returned according to different types.
     * - `STRING`: String type result StrResourceAuthAction
     * - `ARRAY`: array type ArrResourceAuthAction
     * - `TREE`: tree type TreeResourceAuthAction
     */
    resourceType: GetExternalUserResourceStructDataDto.resourceType;
    /**
     * String resource authorization
     */
    strResourceAuthAction?: StrResourceAuthAction;
    /**
     * Array resource authorization
     */
    arrResourceAuthAction?: ArrResourceAuthAction;
    /**
     *Tree resource authorization
     */
    treeResourceAuthAction?: TreeResourceAuthAction;
};

export namespace GetExternalUserResourceStructDataDto {

    /**
     * Data resource types currently support three types: tree structure (TREE), string (STRING), and array (ARRAY). Different structures are returned according to different types.
     * - `STRING`: String type result StrResourceAuthAction
     * - `ARRAY`: array type ArrResourceAuthAction
     * - `TREE`: tree type TreeResourceAuthAction
     */
    export enum resourceType {
        TREE = 'TREE',
        STRING = 'STRING',
        ARRAY = 'ARRAY',
    }


}

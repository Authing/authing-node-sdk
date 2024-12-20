/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DepartmentI18nDto } from './DepartmentI18nDto';

export type CreateDepartmentReqDto = {
    /**
     * Organization Code (organizationCode)
     */
    organizationCode: string;
    /**
     *Department name
     */
    name: string;
    /**
     * Parent department id, if it is the root department, pass root
     */
    parentDepartmentId: string;
    /**
     * Metadata information
     */
    metadata: any;
    /**
     * Custom department ID, used to store customized IDs
     */
    openDepartmentId?: string;
    /**
     * Department description
     */
    description?: string;
    /**
     *Department identification code
     */
    code?: string;
    /**
     * Whether it is a virtual department
     */
    isVirtualNode?: boolean;
    /**
     *Multi-language settings
     */
    i18n?: DepartmentI18nDto;
    /**
     * Extended field data of department
     */
    customData?: any;
    /**
     * The type of parent department ID used in this call
     */
    departmentIdType?: CreateDepartmentReqDto.departmentIdType;
    /**
     * Position id list
     */
    postIdList?: Array<string>;
    /**
     * Tenant ID
     */
    tenantId?: string;
};

export namespace CreateDepartmentReqDto {

    /**
     * The type of parent department ID used in this call
     */
    export enum departmentIdType {
        DEPARTMENT_ID = 'department_id',
        OPEN_DEPARTMENT_ID = 'open_department_id',
        SYNC_RELATION = 'sync_relation',
        CUSTOM_FIELD = 'custom_field',
        CODE = 'code',
    }


}

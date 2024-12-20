/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeleteCustomFieldDto } from './DeleteCustomFieldDto';

export type DeleteCustomFieldsReqDto = {
    /**
     * Tenant ID
     */
    tenantId: string;
    /**
     * Custom field list
     */
    list: Array<DeleteCustomFieldDto>;
};

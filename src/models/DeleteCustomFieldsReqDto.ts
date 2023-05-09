/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeleteCustomFieldDto } from './DeleteCustomFieldDto';

export type DeleteCustomFieldsReqDto = {
    /**
     * 租户 ID
     */
    tenantId: string;
    /**
     * 自定义字段列表
     */
    list: Array<DeleteCustomFieldDto>;
};

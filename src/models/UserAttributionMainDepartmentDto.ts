/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvitationDepartmentRespDto } from './InvitationDepartmentRespDto';

export type UserAttributionMainDepartmentDto = {
    /**
     * 策略 ID
     */
    policyId: string;
    /**
     * 主部门 ID
     */
    departmentId: (string | null);
    /**
     * 主部门详情
     */
    departmentDetail?: InvitationDepartmentRespDto;
};

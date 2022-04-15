/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListDepartmentMembersOptionsDto } from './ListDepartmentMembersOptionsDto';

export type ListDepartmentMembersReqDto = {
    /**
     * 组织 code
     */
    organizationCode: string;
    /**
     * 部门 id，根部门传 `root`
     */
    departmentId: string;
    /**
     * 可选参数
     */
    options?: ListDepartmentMembersOptionsDto;
};

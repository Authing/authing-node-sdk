/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListDepartmentMembersOptionsDto } from './ListDepartmentMembersOptionsDto';

export type ListDepartmentMembersReqDto = {
    /**
     * 部门 id，根部门传 `root`
     */
    departmentId: string;
    /**
     * 组织 code
     */
    organizationCode: string;
    /**
     * 可选参数
     */
    options?: ListDepartmentMembersOptionsDto;
};

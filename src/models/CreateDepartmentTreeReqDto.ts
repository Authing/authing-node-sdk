/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserInfoDto } from './UserInfoDto';

export type CreateDepartmentTreeReqDto = {
    /**
     * 部门名称
     */
    name: string;
    /**
     * 子部门
     */
    children?: Array<string>;
    /**
     * 部门成员
     */
    members?: UserInfoDto;
};

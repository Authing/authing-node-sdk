/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SetUserDepartmentDto } from './SetUserDepartmentDto';

export type SetUserDepartmentsDto = {
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 部门信息
     */
    departments: Array<SetUserDepartmentDto>;
};

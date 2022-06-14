/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SetUserDepartmentDto } from './SetUserDepartmentDto';

export type SetUserDepartmentsDto = {
    /**
     * 部门信息
     */
    departments: Array<SetUserDepartmentDto>;
    /**
     * 用户 ID
     */
    userId: string;
};

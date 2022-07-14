/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SetUserDepartmentDto } from './SetUserDepartmentDto';
import type { SetUserDepartmentsOptionsDto } from './SetUserDepartmentsOptionsDto';

export type SetUserDepartmentsDto = {
    /**
     * 部门信息
     */
    departments: Array<SetUserDepartmentDto>;
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 可选参数
     */
    options?: SetUserDepartmentsOptionsDto;
};

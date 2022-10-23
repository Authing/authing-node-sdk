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
     * 用户唯一标志，可以是用户 ID、用户名、邮箱、手机号、外部 ID、在外部身份源的 ID。
     */
    userId: string;
    /**
     * 可选参数
     */
    options?: SetUserDepartmentsOptionsDto;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListRoleDepartmentOptionsDto } from './ListRoleDepartmentOptionsDto';

export type ListRoleDepartmentDto = {
    /**
     * 部门唯一标识符
     */
    code: string;
    /**
     * 权限分组的 code
     */
    namespace?: string;
    /**
     * 可选参数
     */
    options?: ListRoleDepartmentOptionsDto;
};

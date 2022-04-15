/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListRoleMemberOptionsDto } from './ListRoleMemberOptionsDto';

export type ListRoleMemberDto = {
    /**
     * 角色唯一标识符
     */
    code: string;
    /**
     * 权限分组的 code
     */
    namespace?: string;
    /**
     * 可选参数
     */
    options?: ListRoleMemberOptionsDto;
};

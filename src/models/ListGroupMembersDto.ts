/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListUsersOptionsDto } from './ListUsersOptionsDto';

export type ListGroupMembersDto = {
    /**
     * 分组 code
     */
    code: string;
    /**
     * 可选参数
     */
    options?: ListUsersOptionsDto;
};

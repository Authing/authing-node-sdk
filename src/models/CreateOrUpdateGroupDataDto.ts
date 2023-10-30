/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupDto } from './GroupDto';

export type CreateOrUpdateGroupDataDto = {
    /**
     * 是否创建
     */
    created: boolean;
    /**
     * 群组信息
     */
    data: GroupDto;
};

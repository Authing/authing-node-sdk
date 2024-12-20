/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupDto } from './GroupDto';

export type CreateOrUpdateGroupDataDto = {
    /**
     * Whether to create
     */
    created: boolean;
    /**
     * Group information
     */
    data: GroupDto;
};

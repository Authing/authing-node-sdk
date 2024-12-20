/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserDto } from './UserDto';

export type GroupDto = {
    /**
     *Group ID
     */
    id: string;
    /**
     * group code
     */
    code: string;
    /**
     * Group name
     */
    name: string;
    /**
     *Group description
     */
    description: string;
    /**
     * Grouping type
     */
    type: string;
    /**
     * Group metadata information
     */
    metadataSource: Array<string>;
    /**
     * Member list
     */
    members: Array<UserDto>;
};

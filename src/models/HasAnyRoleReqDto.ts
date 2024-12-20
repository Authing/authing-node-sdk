/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HasAnyRoleOptionsDto } from './HasAnyRoleOptionsDto';
import type { HasRoleRolesDto } from './HasRoleRolesDto';

export type HasAnyRoleReqDto = {
    /**
     * Role list
     */
    roles: Array<HasRoleRolesDto>;
    /**
     * The user's unique identifier can be user ID, username, email, mobile phone number, externalId, or ID in an external identity source. For details, see the description of the userIdType field. Defaults to user id.
     */
    userId: string;
    /**
     * Optional parameters
     */
    options?: HasAnyRoleOptionsDto;
};

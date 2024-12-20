/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateUserInfoDto } from './CreateUserInfoDto';
import type { CreateUserOptionsDto } from './CreateUserOptionsDto';

export type CreateUserBatchReqDto = {
    /**
     * User list
     */
    list: Array<CreateUserInfoDto>;
    /**
     * Optional parameters
     */
    options?: CreateUserOptionsDto;
};

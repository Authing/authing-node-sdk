/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateUserInfoDto } from './CreateUserInfoDto';
import type { CreateUserOptionsDto } from './CreateUserOptionsDto';

export type CreateUserBatchReqDto = {
    /**
     * 批量用户
     */
    list: Array<CreateUserInfoDto>;
    /**
     * 附加选项
     */
    options?: CreateUserOptionsDto;
};

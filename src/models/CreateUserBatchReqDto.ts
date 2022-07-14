/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateUserInfoDto } from './CreateUserInfoDto';
import type { CreateUserOptionsDto } from './CreateUserOptionsDto';

export type CreateUserBatchReqDto = {
    /**
     * 用户列表
     */
    list: Array<CreateUserInfoDto>;
    /**
     * 可选参数
     */
    options?: CreateUserOptionsDto;
};

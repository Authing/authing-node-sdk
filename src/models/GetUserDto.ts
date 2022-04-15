/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetUserOptionsDto } from './GetUserOptionsDto';

export type GetUserDto = {
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 可选参数
     */
    options?: GetUserOptionsDto;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetUserLoginHistoryOptionsDto } from './GetUserLoginHistoryOptionsDto';

export type GetUserLoginHistoryDto = {
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 应用 ID
     */
    appId?: string;
    /**
     * 客户端 IP
     */
    clientIp?: string;
    /**
     * 开始时间戳（毫秒）
     */
    start?: number;
    /**
     * 结束时间戳（毫秒）
     */
    end?: number;
    /**
     * 可选参数
     */
    options?: GetUserLoginHistoryOptionsDto;
};

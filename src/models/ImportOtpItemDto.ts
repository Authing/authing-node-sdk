/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ImportOtpItemDataDto } from './ImportOtpItemDataDto';

export type ImportOtpItemDto = {
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * OTP 数据
     */
    otp: ImportOtpItemDataDto;
};

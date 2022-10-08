/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SendEnrollFactorRequestOtpDataDto } from './SendEnrollFactorRequestOtpDataDto';

export type SendEnrollFactorRequestDataDto = {
    /**
     * 临时凭证 enrollmentToken，有效时间为一分钟。在进行「绑定 MFA 认证要素」时，需要带上此参数。
     */
    enrollmentToken: string;
    /**
     * 发起绑定 OTP 类型认证要素时，接口会返回此数据。
     */
    otpData?: SendEnrollFactorRequestOtpDataDto;
};

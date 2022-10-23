/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SystmeInfoRSAConfig } from './SystmeInfoRSAConfig';
import type { SystmeInfoSM2Config } from './SystmeInfoSM2Config';
import type { SystmeInfoVersion } from './SystmeInfoVersion';

export type SystemInfoResp = {
    /**
     * RSA256 加密配置信息
     */
    rsa: SystmeInfoRSAConfig;
    /**
     * 国密 SM2 加密配置信息
     */
    sm2: SystmeInfoSM2Config;
    /**
     * 国密 SM2 加密配置信息
     */
    version: SystmeInfoVersion;
    /**
     * Authing 服务对外 IP 列表
     */
    publicIps: Array<string>;
};

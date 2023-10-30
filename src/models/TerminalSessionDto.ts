/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeviceInfo } from './DeviceInfo';

export type TerminalSessionDto = {
    /**
     * 设备信息
     */
    device: DeviceInfo;
    /**
     * 最近登录时间
     */
    lastLoginTime: string;
    /**
     * 最近登录 IP
     */
    lastIp?: string;
    /**
     * 是否在线
     */
    online: boolean;
};

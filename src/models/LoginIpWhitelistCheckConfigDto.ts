/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LoginIpWhitelistCheckConfigDto = {
    /**
     * 是否开启登录 ip 白名单验证
     */
    enabled: boolean;
    /**
     * 人机验证 ip 白名单
     */
    ipWhitelist: string;
};

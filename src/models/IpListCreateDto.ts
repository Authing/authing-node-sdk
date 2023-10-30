/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IpListCreateDto = {
    /**
     * 添加时间
     */
    expireAt: string;
    /**
     * 限制类型，FORBID_LOGIN-禁止登录，FORBID_REGISTER-禁止注册，SKIP_MFA-跳过 MFA
     */
    limitList: Array<string>;
    /**
     * 删除类型，MANUAL-手动，SCHEDULE-策略删除
     */
    removeType: string;
    /**
     * 添加类型，MANUAL-手动，SCHEDULE-策略添加
     */
    addType: string;
    /**
     * ip类型，WHITE-白名单，BLACK-黑名单
     */
    ipType: string;
    /**
     * ip, 多个IP以逗号分割
     */
    ips: string;
};

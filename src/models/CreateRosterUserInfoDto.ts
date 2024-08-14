/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateRosterUserInfoDto = {
    /**
     * 名单 ID
     */
    rosterId: string;
    /**
     * 受邀人名称
     */
    name: string;
    /**
     * 受邀人邮箱，不区分大小写
     */
    email: string;
    /**
     * 受邀人手机号国际区码
     */
    phoneCountryCode?: string;
    /**
     * 受邀人手机号
     */
    phone?: string;
};

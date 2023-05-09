/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

export type UserSyncRelationDto = {
    /**
     * 外部身份源类型，如：
     * - `wechatwork`: 企业微信
     * - `dingtalk`: 钉钉
     * - `lark`: 飞书
     * - `welink`: Welink
     * - `ldap`: LDAP
     * - `active-directory`: Windows AD
     * - `italent`: 北森
     * - `xiaoshouyi`: 销售易
     * - `maycur`: 每刻报销
     * - `scim`: SCIM
     * - `moka`: Moka HR
     *
     */
    provider: string;
    /**
     * 在外部身份源中的 ID
     */
    userIdInIdp: string;
    /**
     * 用户在第三方中的身份信息
     */
    userInfoInIdp: User;
};

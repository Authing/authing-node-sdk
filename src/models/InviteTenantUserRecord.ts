/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InviteTenantUserRecord = {
    /**
     * 邀请记录编号
     */
    recordId: number;
    /**
     * 邀请账号
     */
    inviteAccount: string;
    /**
     * 账号激活状态
     */
    verifiedStatus: string;
    /**
     * 邀请链接
     */
    inviteLink: string;
    /**
     * 创建时间
     */
    createdAt: string;
    /**
     * 账号激活时间
     */
    activatedAt: string;
};

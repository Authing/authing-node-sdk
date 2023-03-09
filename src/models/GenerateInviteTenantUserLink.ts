/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GenerateInviteTenantUserLink = {
    /**
     * 链接有效期
     */
    validityTerm: string;
    /**
     * 要邀请的用户邮箱
     */
    emails: Array<string>;
    /**
     * 应用 ID
     */
    appId: string;
    /**
     * 租户 ID
     */
    tenantId?: string;
};

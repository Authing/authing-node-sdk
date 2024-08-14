/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InvitationConfigDto = {
    /**
     * 有效期(天)，-1 永久有效
     */
    expiredTimeOfDay: number;
    /**
     * 是否加入邀请人相同部门
     */
    joinSameDepartment: boolean;
    /**
     * 确认邀请后，加入的部门列表
     */
    departmentIds?: Array<string>;
    /**
     * 是否需要管理员确认
     */
    enabledAdminConsent?: boolean;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 根据名单 Id 获取邀请名单详情
 */
export type GetInvitationRosterDto = {
    /**
     * 名单 ID
     */
    rosterId?: any;
    /**
     * 是否返回创建者详情
     */
    withCreatorDetail?: any;
    /**
     * 是否返回名单关联的用户数量，可选。
     */
    withUserCount?: any;
    /**
     * 是否返回名单关联的策略，可选。
     */
    withAssignedPolicy?: any;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteRosterUsersDto = {
    /**
     * 受邀人 ID 列表
     */
    inviteeIds: Array<string>;
    /**
     * 名单 ID
     */
    rosterId: string;
};
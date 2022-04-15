/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RemoveGroupMembersReqDto = {
    /**
     * 分组 code
     */
    code: string;
    /**
     * 用户 ID 数组
     */
    userIds: Array<string>;
};

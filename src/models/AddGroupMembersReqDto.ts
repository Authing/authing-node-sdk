/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AddGroupMembersReqDto = {
    /**
     * 用户 ID 数组
     */
    userIds: Array<string>;
    /**
     * 分组 code
     */
    code: string;
};

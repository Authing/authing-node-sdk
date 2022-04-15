/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AddDepartmentMembersReqDto = {
    /**
     * 部门 ID
     */
    departmentId: string;
    /**
     * 组织 code
     */
    organizationCode: string;
    /**
     * 用户 ID 列表
     */
    userIds: Array<string>;
};

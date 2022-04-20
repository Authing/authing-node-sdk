/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateDepartmentReqDto = {
    /**
     * 组织 code
     */
    organizationCode: string;
    /**
     * 部门名称
     */
    name: string;
    /**
     * 父部门 id
     */
    parentDepartmentId: string;
    /**
     * 部门 ID
     */
    departmentId: string;
    /**
     * 部门识别码
     */
    code?: string;
    /**
     * 部门负责人 ID
     */
    leaderUserId?: string;
};

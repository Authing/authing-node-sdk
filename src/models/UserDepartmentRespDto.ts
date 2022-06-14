/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserDepartmentRespDto = {
    /**
     * 部门 ID
     */
    departmentId: string;
    /**
     * 部门名称
     */
    name: string;
    /**
     * 部门描述
     */
    description: string;
    /**
     * 是否是部门 Leader
     */
    isLeader: boolean;
    /**
     * 部门识别码
     */
    code: string;
    /**
     * 是否是主部门
     */
    isMainDepartment: boolean;
};

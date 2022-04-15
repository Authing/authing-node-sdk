/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DepartmentDto = {
    /**
     * 部门 ID
     */
    departmentId: string;
    /**
     * 父部门 id
     */
    parentDepartmentId: string;
    /**
     * 部门名称
     */
    name: string;
    /**
     * 部门描述
     */
    description: string;
    /**
     * 部门识别码
     */
    code?: string;
    /**
     * 部门负责人 ID
     */
    leaderUserId?: string;
    /**
     * 部门人数
     */
    membersCount: number;
};

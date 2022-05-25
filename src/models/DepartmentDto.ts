/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DepartmentDto = {
    /**
     * 部门系统 ID（为 Authing 系统自动生成，不可修改）
     */
    departmentId: string;
    /**
     * 自定义部门 ID，用于存储自定义的 ID
     */
    openDepartmentId?: string;
    /**
     * 父部门 id
     */
    parentDepartmentId: string;
    /**
     * 父部门自定义的 ID
     */
    parentOpenDepartmentId?: string;
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
    /**
     * 是否包含子部门
     */
    hasChildren: boolean;
};

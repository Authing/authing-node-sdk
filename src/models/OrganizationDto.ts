/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OrganizationDto = {
    /**
     * 组织 code
     */
    organizationCode: string;
    /**
     * 组织名称
     */
    organizationName: string;
    /**
     * 根节点 ID
     */
    departmentId: string;
    /**
     * 根节点自定义 ID
     */
    openDepartmentId?: string;
    /**
     * 是否包含子节点
     */
    hasChildren: boolean;
    /**
     * 部门负责人 ID
     */
    leaderUserId: string;
    /**
     * 部门人数
     */
    membersCount: number;
};

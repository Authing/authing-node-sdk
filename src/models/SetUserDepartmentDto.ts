/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SetUserDepartmentDto = {
    /**
     * 部门 id
     */
    departmentId: string;
    /**
     * 是否是部门 leader
     */
    isLeader?: boolean;
    /**
     * 是否是主部门
     */
    isMainDepartment?: boolean;
};

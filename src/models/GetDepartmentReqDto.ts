/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetDepartmentReqDto = {
    /**
     * 组织 code
     */
    organizationCode: string;
    /**
     * 部门 id，根部门传 `root`
     */
    departmentId: string;
};

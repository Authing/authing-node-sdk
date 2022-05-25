/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteDepartmentReqDto = {
    /**
     * 组织 code
     */
    organizationCode: string;
    /**
     * 部门系统 ID（为 Authing 系统自动生成，不可修改）
     */
    departmentId: string;
    /**
     * 此次调用中使用的部门 ID 的类型
     */
    departmentIdType?: DeleteDepartmentReqDto.departmentIdType;
};

export namespace DeleteDepartmentReqDto {

    /**
     * 此次调用中使用的部门 ID 的类型
     */
    export enum departmentIdType {
        DEPARTMENT_ID = 'department_id',
        OPEN_DEPARTMENT_ID = 'open_department_id',
    }


}

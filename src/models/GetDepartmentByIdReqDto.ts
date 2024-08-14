/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetDepartmentByIdReqDto = {
    /**
     * 部门 ID
     */
    departmentId: string;
    /**
     * 租户 ID
     */
    tenantId?: string;
    /**
     * 应用类型列表
     */
    appTypeList?: Array<string>;
    /**
     * 是否获取自定义数据
     */
    withCustomData?: boolean;
};

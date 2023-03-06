/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PostInfoDto = {
    /**
     * 分组 code
     */
    code: string;
    /**
     * 分组名称
     */
    name: string;
    /**
     * 分组描述
     */
    description?: string;
    /**
     * 岗位关联部门数
     */
    departmentIdList: Array<string>;
};

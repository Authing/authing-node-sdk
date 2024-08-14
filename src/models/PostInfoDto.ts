/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PostInfoDto = {
    /**
     * 岗位 ID
     */
    id?: string;
    /**
     * 岗位 code
     */
    code: string;
    /**
     * 岗位名称
     */
    name: string;
    /**
     * 岗位描述
     */
    description?: string;
    /**
     * 岗位关联部门数
     */
    departmentIdList: Array<string>;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreatePostDto = {
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
     * 部门 id 列表
     */
    departmentIdList?: string;
};

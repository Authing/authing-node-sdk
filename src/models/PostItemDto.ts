/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PostItemDto = {
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
     * 岗位关联用户数，只有在 skipCount 不为 true 时才存在
     */
    userCount: number;
    /**
     * 岗位关联部门数，只有在 skipCount 不为 true 时才存在
     */
    departmentCount: number;
};

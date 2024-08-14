/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PostItemDto = {
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
     * 岗位关联用户数，只有在 skipCount 不为 true 时才存在
     */
    userCount: number;
    /**
     * 岗位关联部门数，只有在 skipCount 不为 true 时才存在
     */
    departmentCount: number;
    /**
     * 岗位元数据信息
     */
    metadataSource: Array<string>;
};

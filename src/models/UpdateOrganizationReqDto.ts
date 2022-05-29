/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateOrganizationReqDto = {
    /**
     * 组织 code
     */
    organizationCode: string;
    /**
     * 组织描述信息
     */
    description?: string;
    /**
     * 根节点自定义 ID
     */
    openDepartmentId?: string;
    /**
     * 新组织 code
     */
    organizationNewCode?: string;
    /**
     * 组织名称
     */
    organizationName?: string;
};

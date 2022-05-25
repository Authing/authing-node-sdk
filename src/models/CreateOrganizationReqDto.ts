/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateOrganizationReqDto = {
    /**
     * 组织名称
     */
    organizationName: string;
    /**
     * 组织 code
     */
    organizationCode: string;
    /**
     * 根节点自定义 ID
     */
    openDepartmentId?: string;
};

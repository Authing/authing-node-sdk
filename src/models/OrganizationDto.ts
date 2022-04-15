/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OrganizationDto = {
    /**
     * 组织 code
     */
    organizationCode: string;
    /**
     * 组织名称
     */
    organizationName: string;
    /**
     * 部门负责人 ID
     */
    leaderUserId: string;
    /**
     * 部门人数
     */
    membersCount: number;
};

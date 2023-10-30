/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupBo } from './GroupBo';
import type { NodeBo } from './NodeBo';
import type { PolicyBo } from './PolicyBo';
import type { RoleBo } from './RoleBo';

export type ListPermissionViewRespDto = {
    /**
     * 用户唯一标志，可以是用户 ID、用户名、邮箱、手机号、外部 ID、在外部身份源的 ID。
     */
    userId: string;
    /**
     * 用户真实名称，不具备唯一性
     */
    username?: string;
    /**
     * 权限空间 id
     */
    namespaceId: string;
    /**
     * 权限空间 Code
     */
    namespaceCode: string;
    /**
     * 权限空间名称
     */
    namespaceName: string;
    /**
     * 数据资源 id
     */
    dataResourceId: string;
    /**
     * 数据资源 Code
     */
    dataResourceCode: string;
    /**
     * 数据资源 名称
     */
    dataResourceName: string;
    /**
     * 数据策略列表
     */
    dataPolicyList: Array<PolicyBo>;
    /**
     * 角色列表
     */
    roleList: Array<RoleBo>;
    /**
     * 用户组列表
     */
    groupList: Array<GroupBo>;
    /**
     * 组织机构列表
     */
    nodeList: Array<NodeBo>;
};

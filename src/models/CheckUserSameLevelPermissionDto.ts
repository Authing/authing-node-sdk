/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthEnvParams } from './AuthEnvParams';

export type CheckUserSameLevelPermissionDto = {
    /**
     * 当前树资源路径子节点 Code
     */
    resourceNodeCodes: Array<string>;
    /**
     * 树资源路径,允许多层级路径，示例如下所示
     * - treeResourceCode
     * - treeResourceCode/structCode
     * - treeResourceCode/structCode/struct1Code
     * - treeResourceCode/.../structCode
     */
    resource: string;
    /**
     * 数据资源权限操作
     */
    action: string;
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 权限空间 Code
     */
    namespaceCode: string;
    /**
     * 是否开启条件判断，默认 false 不开启
     */
    judgeConditionEnabled?: boolean;
    /**
     * 条件环境属性，若开启条件判断则使用
     */
    authEnvParams?: AuthEnvParams;
};

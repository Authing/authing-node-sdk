/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthEnvParams } from './AuthEnvParams';

export type CheckUserSameLevelPermissionDto = {
    /**
     * 资源路径
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
     * 当前树资源路径子节点code
     */
    resourceNodeCodes?: Array<string>;
    /**
     * 是否开启条件判断，默认 false 不开启
     */
    judgeConditionEnabled?: boolean;
    /**
     * 条件环境属性，若开启条件判断则使用
     */
    authEnvParams?: AuthEnvParams;
};

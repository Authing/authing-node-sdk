/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthEnvParams } from './AuthEnvParams';

export type CheckExternalUserPermissionDto = {
    /**
     * 数据资源路径列表,
     */
    resources: Array<string>;
    /**
     * 数据资源权限操作, read、get、write 等动作
     */
    action: string;
    /**
     * 外部用户 ID
     */
    externalId: string;
    /**
     * 权限空间 Code
     */
    namespaceCode: string;
    /**
     * 是否开启条件判断，默认 true 开启
     */
    judgeConditionEnabled?: boolean;
    /**
     * 条件环境属性，若开启条件判断则使用
     */
    authEnvParams?: AuthEnvParams;
};

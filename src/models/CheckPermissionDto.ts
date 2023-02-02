/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthEnvParams } from './AuthEnvParams';

export type CheckPermissionDto = {
    /**
     * 资源路径列表,**树资源需到具体树节点**
     */
    resources: Array<string>;
    /**
     * 数据资源权限操作, read、get、write 等动作
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

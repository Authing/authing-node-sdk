/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataResourceActionListDto } from './DataResourceActionListDto';

export type UserPermissionResourceDto = {
    /**
     * 数据策略下所授权的数据资源 Code
     */
    resourceCode: string;
    /**
     * 数据资源权限操作列表
     */
    actionList: Array<DataResourceActionListDto>;
};

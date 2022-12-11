/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArrayOrStringActionDto } from './ArrayOrStringActionDto';

export type DataResourcePolicyStringStructs = {
    /**
     * 数据策略所拥有对某一个数据资源的操作权限，所有操作（ALL）,特定操作（SPECIAL）
     */
    operationType: string;
    /**
     * 数据权限列表，每个策略下所有的数据权限节点
     */
    actionList: Array<ArrayOrStringActionDto>;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataResourcePolicyTreeStructs } from './DataResourcePolicyTreeStructs';

export type TreePermissionDto = {
    /**
     * 资源id
     */
    resourceId: string;
    /**
     * 资源类型，STRING/ARRAY/TREE
     */
    resourceType: string;
    /**
     * 树结构节点列表
     */
    nodeAuthActionList: Array<DataResourcePolicyTreeStructs>;
};

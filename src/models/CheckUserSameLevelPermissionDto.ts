/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthEnvParams } from './AuthEnvParams';

export type CheckUserSameLevelPermissionDto = {
    /**
     * Current tree resource path sub-node Code
     */
    resourceNodeCodes: Array<string>;
    /**
     * Tree resource path, allowing multi-level paths, the example is as follows
     * - treeResourceCode
     * - treeResourceCode/structCode
     * - treeResourceCode/structCode/struct1Code
     * - treeResourceCode/.../structCode
     */
    resource: string;
    /**
     * Data resource permission operations
     */
    action: string;
    /**
     *User ID
     */
    userId: string;
    /**
     * Permission space Code
     */
    namespaceCode: string;
    /**
     * Whether to enable conditional judgment, default false is not enabled
     */
    judgeConditionEnabled?: boolean;
    /**
     * Conditional environment attributes, used if conditional judgment is enabled
     */
    authEnvParams?: AuthEnvParams;
};

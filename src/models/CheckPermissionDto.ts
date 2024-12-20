/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthEnvParams } from './AuthEnvParams';

export type CheckPermissionDto = {
    /**
     * Resource path list, **Tree resources need to go to specific tree nodes**
     */
    resources: Array<string>;
    /**
     * Data resource permission operations, read, get, write and other actions
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

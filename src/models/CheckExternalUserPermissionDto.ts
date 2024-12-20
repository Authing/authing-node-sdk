/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthEnvParams } from './AuthEnvParams';

export type CheckExternalUserPermissionDto = {
    /**
     * Resource path list, **Tree resources need to go to specific tree nodes**
     */
    resources: Array<string>;
    /**
     * Data resource permission operations, read, get, write and other actions
     */
    action: string;
    /**
     * External user ID
     */
    externalId: string;
    /**
     * Permission space Code
     */
    namespaceCode: string;
    /**
     * Whether to enable conditional judgment, default true is enabled
     */
    judgeConditionEnabled?: boolean;
    /**
     * Conditional environment attributes, used if conditional judgment is enabled
     */
    authEnvParams?: AuthEnvParams;
};

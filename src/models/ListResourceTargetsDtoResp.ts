/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActionAuth } from './ActionAuth';

export type ListResourceTargetsDtoResp = {
    /**
     * 资源路径
     */
    resource: string;
    /**
     * 数据资源权限操作列表
     */
    actionAuthList: Array<ActionAuth>;
};

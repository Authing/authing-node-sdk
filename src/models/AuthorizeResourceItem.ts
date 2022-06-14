/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResourceItemDto } from './ResourceItemDto';

export type AuthorizeResourceItem = {
    /**
     * 目标对象类型
     */
    targetType: AuthorizeResourceItem.targetType;
    /**
     * 目标对象唯一标志符
     */
    targetIdentifiers: Array<string>;
    /**
     * 授权的资源列表
     */
    resources: Array<ResourceItemDto>;
};

export namespace AuthorizeResourceItem {

    /**
     * 目标对象类型
     */
    export enum targetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        DEPARTMENT = 'DEPARTMENT',
    }


}

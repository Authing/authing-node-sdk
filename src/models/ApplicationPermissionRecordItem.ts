/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApplicationPermissionRecordItem = {
    /**
     * 主体类型
     */
    targetType: ApplicationPermissionRecordItem.targetType;
    /**
     * 权限分组 code，当主体类型为 "ROLE" 时必传
     */
    namespaceCode?: string;
    /**
     * 当主体类型为 "ORG" 时，授权是否被子节点继承
     */
    inheritByChildren?: boolean;
    /**
     * 主体标识列表，当主体类型为 "USER" 时，值应为用户 ID；当主体类型为 "GROUP" 时，值应为分组 code；当主体类型为 "ROLE" 时，值应为角色 code；当主体类型为 "ORG" 时，值应为组织节点 ID。最多 50 条。
     */
    targetIdentifier: Array<string>;
    /**
     * 授权作用，允许或拒绝
     */
    effect: ApplicationPermissionRecordItem.effect;
};

export namespace ApplicationPermissionRecordItem {

    /**
     * 主体类型
     */
    export enum targetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        ORG = 'ORG',
    }

    /**
     * 授权作用，允许或拒绝
     */
    export enum effect {
        ALLOW = 'ALLOW',
        DENY = 'DENY',
    }


}

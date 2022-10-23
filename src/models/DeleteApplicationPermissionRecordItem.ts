/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteApplicationPermissionRecordItem = {
    /**
     * 主体类型
     */
    targetType: DeleteApplicationPermissionRecordItem.targetType;
    /**
     * 权限分组 code，当主体类型为 "ROLE" 时必传
     */
    namespaceCode?: string;
    /**
     * 主体标识列表，当主体类型为 "USER" 时，值应为用户 ID；当主体类型为 "GROUP" 时，值应为分组 code；当主体类型为 "ROLE" 时，值应为角色 code；当主体类型为 "ORG" 时，值应为组织节点 ID。最多 50 条。
     */
    targetIdentifier: Array<string>;
};

export namespace DeleteApplicationPermissionRecordItem {

    /**
     * 主体类型
     */
    export enum targetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        ORG = 'ORG',
    }


}

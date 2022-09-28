/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ResourcePermissionAssignmentDto = {
    /**
     * 主体类型
     */
    targetType: ResourcePermissionAssignmentDto.targetType;
    /**
     * 主体唯一标志符
     */
    targetIdentifier: string;
    /**
     * 操作列表
     */
    actions: Array<string>;
};

export namespace ResourcePermissionAssignmentDto {

    /**
     * 主体类型
     */
    export enum targetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        DEPARTMENT = 'DEPARTMENT',
    }


}

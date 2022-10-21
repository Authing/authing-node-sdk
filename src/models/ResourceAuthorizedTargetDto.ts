/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ResourceAuthorizedTargetDto = {
    /**
     * 主体类型
     */
    targetType: ResourceAuthorizedTargetDto.targetType;
    /**
     * 主体唯一标志符
     */
    targetIdentifier: string;
    /**
     * 操作列表
     */
    actions: Array<string>;
};

export namespace ResourceAuthorizedTargetDto {

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

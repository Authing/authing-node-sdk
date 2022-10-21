/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetResourceAuthorizedTargetsDto = {
    /**
     * 资源
     */
    resource: string;
    /**
     * 权限分组
     */
    namespace?: string;
    /**
     * 目标对象类型：
     * - `USER`: 用户
     * - `ROLE`: 角色
     * - `GROUP`: 分组
     * - `DEPARTMENT`: 部门
     *
     */
    targetType?: GetResourceAuthorizedTargetsDto.targetType;
    /**
     * 当前页数，从 1 开始
     */
    page?: number;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: number;
};

export namespace GetResourceAuthorizedTargetsDto {

    /**
     * 目标对象类型：
     * - `USER`: 用户
     * - `ROLE`: 角色
     * - `GROUP`: 分组
     * - `DEPARTMENT`: 部门
     *
     */
    export enum targetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        DEPARTMENT = 'DEPARTMENT',
    }


}

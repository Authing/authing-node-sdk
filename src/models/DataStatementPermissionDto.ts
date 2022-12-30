/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DataStatementPermissionDto = {
    /**
     * 数据资源权限操作：ALLOW（允许）/DENY（拒绝）
     */
    effect: DataStatementPermissionDto.effect;
    /**
     * 资源权限列表，字符串数据资源和数组数据资源，没有 path 路径
     */
    permissions: Array<string>;
};

export namespace DataStatementPermissionDto {

    /**
     * 数据资源权限操作：ALLOW（允许）/DENY（拒绝）
     */
    export enum effect {
        DENY = 'DENY',
        ALLOW = 'ALLOW',
    }


}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DataStatementPermissionDto = {
    /**
     * 数据资源权限操作：ALLOW（允许）/DENY（拒绝）
     */
    effect: DataStatementPermissionDto.effect;
    /**
     * 资源权限列表，字符串数据资源和字符串数据资源，没有 path 路径，默认表达是 [‘namespaceCode/strResourceCode/action’]
     */
    dataPermissions: Array<string>;
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

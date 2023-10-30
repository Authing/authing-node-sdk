/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteDepartmentSyncRelationReqDto = {
    /**
     * 外部身份源类型，如：
     * - `wechatwork`: 企业微信
     * - `dingtalk`: 钉钉
     * - `lark`: 飞书
     * - `welink`: Welink
     * - `ldap`: LDAP
     * - `active-directory`: Windows AD
     * - `italent`: 北森
     * - `xiaoshouyi`: 销售易
     * - `maycur`: 每刻报销
     * - `scim`: SCIM
     * - `moka`: Moka HR
     *
     */
    provider: string;
    /**
     * 部门 ID，根部门传 `root`
     */
    departmentId: string;
    /**
     * 组织 code
     */
    organizationCode: string;
    /**
     * 此次调用中使用的部门 ID 的类型
     */
    departmentIdType?: DeleteDepartmentSyncRelationReqDto.departmentIdType;
};

export namespace DeleteDepartmentSyncRelationReqDto {

    /**
     * 此次调用中使用的部门 ID 的类型
     */
    export enum departmentIdType {
        DEPARTMENT_ID = 'department_id',
        OPEN_DEPARTMENT_ID = 'open_department_id',
        SYNC_RELATION = 'sync_relation',
        CUSTOM_FIELD = 'custom_field',
        CODE = 'code',
    }


}

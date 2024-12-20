/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteDepartmentSyncRelationReqDto = {
    /**
     * External identity source type, such as:
     * - `wechatwork`: Enterprise WeChat
     * - `dingtalk`: DingTalk
     * - `lark`: Feishu
     * - `welink`: Welink
     * - `ldap`: LDAP
     * - `active-directory`: Windows AD
     * - `italent`: Beisen
     * - `xiaoshouyi`: easy sales
     * - `maycur`: reimburse every tick
     * - `scim`: SCIM
     * - `moka`: Moka HR
     *
     */
    provider: string;
    /**
     * Department ID, the root department passes `root`
     */
    departmentId: string;
    /**
     *Organization code
     */
    organizationCode: string;
    /**
     * The type of department ID used in this call
     */
    departmentIdType?: DeleteDepartmentSyncRelationReqDto.departmentIdType;
};

export namespace DeleteDepartmentSyncRelationReqDto {

    /**
     * The type of department ID used in this call
     */
    export enum departmentIdType {
        DEPARTMENT_ID = 'department_id',
        OPEN_DEPARTMENT_ID = 'open_department_id',
        SYNC_RELATION = 'sync_relation',
        CUSTOM_FIELD = 'custom_field',
        CODE = 'code',
    }


}

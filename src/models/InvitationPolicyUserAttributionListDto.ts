/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InvitationPolicyUserAttributionListDto = {
    /**
     * 关联对象的唯一标志符：
     * - 如果是角色，为角色的 code，如 `admin`
     * - 如果是分组，为分组的 code，如 `developer`
     * - 如果是部门，为部门的 ID，如 `6343bafc019xxxx889206c4c`
     * - 如果是岗位，为岗位的 code，如 `leader`
     * - 如果是租户，为租户的 ID，如 `6343b98b7cfxxx9366e9b7c`
     *
     */
    targetIdentifiers: Array<string>;
    /**
     * 角色所在权限空间 code，若 targetType 是 role，此参数必传
     */
    namespace?: string;
    /**
     * 关联对象类型
     */
    targetType: InvitationPolicyUserAttributionListDto.targetType;
};

export namespace InvitationPolicyUserAttributionListDto {

    /**
     * 关联对象类型
     */
    export enum targetType {
        DEPARTMENT = 'department',
        POST = 'post',
        ROLE = 'role',
        GROUP = 'group',
    }


}

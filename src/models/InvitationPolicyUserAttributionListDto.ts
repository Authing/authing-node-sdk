/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InvitationPolicyUserAttributionListDto = {
    /**
     * The unique identifier of the associated object:
     * - If it is a role, it is the code of the role, such as `admin`
     * - If it is a group, it is the code of the group, such as `developer`
     * - If it is a department, it is the ID of the department, such as `6343bafc019xxxx889206c4c`
     * - If it is a position, it is the code of the position, such as `leader`
     * - If it is a tenant, it is the ID of the tenant, such as `6343b98b7cfxxx9366e9b7c`
     *
     */
    targetIdentifiers: Array<string>;
    /**
     * The code of the permission space where the role is located. If the targetType is role, this parameter must be passed
     */
    namespace?: string;
    /**
     * Associated object type
     */
    targetType: InvitationPolicyUserAttributionListDto.targetType;
};

export namespace InvitationPolicyUserAttributionListDto {

    /**
     * Associated object type
     */
    export enum targetType {
        DEPARTMENT = 'department',
        POST = 'post',
        ROLE = 'role',
        GROUP = 'group',
    }


}

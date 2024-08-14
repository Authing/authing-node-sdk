/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupDto } from './GroupDto';
import type { InvitationDepartmentRespDto } from './InvitationDepartmentRespDto';
import type { InvitationPostRespDto } from './InvitationPostRespDto';
import type { RoleDto } from './RoleDto';

export type UserAttributionDto = {
    /**
     * 归属关联记录 ID
     */
    id: string;
    /**
     * 策略 ID
     */
    policyId: string;
    /**
     * 关联对象的唯一标志符：
     * - 如果是用户，为用户的 ID，如 `6343b98b7cfxxx9366e9b7c`
     * - 如果是角色，为角色的 code，如 `admin`
     * - 如果是分组，为分组的 code，如 `developer`
     * - 如果是部门，为部门的 ID，如 `6343bafc019xxxx889206c4c`
     * - 如果是岗位，为岗位的 code，如 `leader`
     *
     */
    targetIdentifier: string;
    /**
     * 角色所在权限空间 code，若 targetType 是 role，此参数必传
     */
    namespace?: string;
    /**
     * 关联对象类型
     */
    targetType: UserAttributionDto.targetType;
    /**
     * 关联对象详情
     */
    targetDetail?: (InvitationDepartmentRespDto | InvitationPostRespDto | RoleDto | GroupDto);
    /**
     * 创建时间
     */
    createdAt: string;
    /**
     * 更新时间
     */
    updatedAt: string;
};

export namespace UserAttributionDto {

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

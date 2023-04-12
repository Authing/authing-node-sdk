/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SetCustomDataDto } from './SetCustomDataDto';

export type SetCustomDataReqDto = {
    /**
     * 自定义数据列表
     */
    list: Array<SetCustomDataDto>;
    /**
     * 目标对象的唯一标志符：
     * - 如果是用户，为用户的 ID，如 `6343b98b7cfxxx9366e9b7c`
     * - 如果是角色，为角色的 code，如 `admin`
     * - 如果是分组，为分组的 code，如 `developer`
     * - 如果是部门，为部门的 ID，如 `6343bafc019xxxx889206c4c`
     *
     */
    targetIdentifier: string;
    /**
     * 目标对象类型：
     * - `USER`: 用户
     * - `ROLE`: 角色
     * - `GROUP`: 分组
     * - `DEPARTMENT`: 部门
     *
     */
    targetType: SetCustomDataReqDto.targetType;
    /**
     * 租户 ID
     */
    tenantId: string;
    /**
     * 所属权限分组的 code，当 target_type 为角色的时候需要填写，否则可以忽略
     */
    namespace?: string;
};

export namespace SetCustomDataReqDto {

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

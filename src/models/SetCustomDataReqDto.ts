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
     * 主体类型的唯一标志符。如果是用户则为用户 ID，角色为角色的 code，部门为部门的 ID
     */
    targetIdentifier: string;
    /**
     * 主体类型，目前支持用户、角色、分组和部门
     */
    targetType: SetCustomDataReqDto.targetType;
    /**
     * 所属权限分组的 code，当 target_type 为角色的时候需要填写，否则可以忽略。
     */
    namespace?: string;
};

export namespace SetCustomDataReqDto {

    /**
     * 主体类型，目前支持用户、角色、分组和部门
     */
    export enum targetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        DEPARTMENT = 'DEPARTMENT',
    }


}

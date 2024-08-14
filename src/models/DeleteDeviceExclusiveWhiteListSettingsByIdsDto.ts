/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteDeviceExclusiveWhiteListSettingsByIdsDto = {
    /**
     * 主体类型：
     * - `USER`: 用户
     * - `GROUP`: 用户组
     * - `ROLE`: 角色
     *
     */
    targetType: DeleteDeviceExclusiveWhiteListSettingsByIdsDto.targetType;
    /**
     * 主体 ID
     */
    targetId: string;
};

export namespace DeleteDeviceExclusiveWhiteListSettingsByIdsDto {

    /**
     * 主体类型：
     * - `USER`: 用户
     * - `GROUP`: 用户组
     * - `ROLE`: 角色
     *
     */
    export enum targetType {
        USER = 'USER',
        GROUP = 'GROUP',
        ROLE = 'ROLE',
    }


}

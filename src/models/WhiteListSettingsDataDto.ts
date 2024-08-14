/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WhiteListSettingsDataDto = {
    /**
     * 主体 ID
     */
    id: string;
    /**
     * 主体类型：
     * - `USER`: 用户
     * - `GROUP`: 用户组
     * - `ROLE`: 角色
     *
     */
    targetType: WhiteListSettingsDataDto.targetType;
};

export namespace WhiteListSettingsDataDto {

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

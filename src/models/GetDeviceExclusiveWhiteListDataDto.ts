/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetDeviceExclusiveWhiteListDataDto = {
    /**
     * 主体名称
     */
    name?: string;
    /**
     * 权限空间 Code
     */
    namePath?: string;
    /**
     * 主体类型：
     * - `USER`: 用户
     * - `GROUP`: 用户组
     * - `ROLE`: 角色
     *
     */
    targetType: GetDeviceExclusiveWhiteListDataDto.targetType;
    /**
     * 主体 ID
     */
    targetId: string;
    /**
     * 图片
     */
    photo?: string;
    /**
     * 添加时间
     */
    createdAt: string;
};

export namespace GetDeviceExclusiveWhiteListDataDto {

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

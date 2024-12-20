/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetDeviceExclusiveWhiteListDataDto = {
    /**
     * Subject name
     */
    name?: string;
    /**
     * Permission space code
     */
    namePath?: string;
    /**
     * Subject type:
     * - `USER`: user
     * - `GROUP`: user group
     * - `ROLE`: role
     *
     */
    targetType: GetDeviceExclusiveWhiteListDataDto.targetType;
    /**
     * Subject ID
     */
    targetId: string;
    /**
     * picture
     */
    photo?: string;
    /**
     *Add time
     */
    createdAt: string;
};

export namespace GetDeviceExclusiveWhiteListDataDto {

    /**
     * Subject type:
     * - `USER`: user
     * - `GROUP`: user group
     * - `ROLE`: role
     *
     */
    export enum targetType {
        USER = 'USER',
        GROUP = 'GROUP',
        ROLE = 'ROLE',
    }


}

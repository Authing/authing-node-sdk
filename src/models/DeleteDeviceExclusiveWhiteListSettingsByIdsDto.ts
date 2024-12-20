/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteDeviceExclusiveWhiteListSettingsByIdsDto = {
    /**
     * Subject type:
     * - `USER`: user
     * - `GROUP`: user group
     * - `ROLE`: role
     *
     */
    targetType: DeleteDeviceExclusiveWhiteListSettingsByIdsDto.targetType;
    /**
     * Subject ID
     */
    targetId: string;
};

export namespace DeleteDeviceExclusiveWhiteListSettingsByIdsDto {

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

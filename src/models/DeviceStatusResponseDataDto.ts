/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeviceStatusResponseDataDto = {
    /**
     * 设备状态:
     * - `activated`: 使用中
     * - `suspended`: 挂起
     * - `deactivated`: 停用
     *
     */
    status: DeviceStatusResponseDataDto.status;
    /**
     * 设备挂起时的剩余秒数
     */
    diffTime?: number;
};

export namespace DeviceStatusResponseDataDto {

    /**
     * 设备状态:
     * - `activated`: 使用中
     * - `suspended`: 挂起
     * - `deactivated`: 停用
     *
     */
    export enum status {
        ACTIVATED = 'activated',
        SUSPENDED = 'suspended',
        DEACTIVATED = 'deactivated',
    }


}

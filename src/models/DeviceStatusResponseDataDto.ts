/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeviceStatusResponseDataDto = {
    /**
     *Device status:
     * - `activated`: in use
     * - `suspended`: suspended
     * - `deactivated`: deactivated
     *
     */
    status: DeviceStatusResponseDataDto.status;
    /**
     * The number of seconds remaining when the device is suspended
     */
    diffTime?: number;
};

export namespace DeviceStatusResponseDataDto {

    /**
     *Device status:
     * - `activated`: in use
     * - `suspended`: suspended
     * - `deactivated`: deactivated
     *
     */
    export enum status {
        ACTIVATED = 'activated',
        SUSPENDED = 'suspended',
        DEACTIVATED = 'deactivated',
    }


}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeviceInfo = {
    /**
     *Unique identification of device
     */
    deviceId: string;
    /**
     *Device name
     */
    name?: string;
    /**
     * System version
     */
    version?: string;
    /**
     *Device type
     */
    type: DeviceInfo.type;
    /**
     *Equipment module
     */
    mod?: string;
    /**
     *Equipment system
     */
    os?: string;
    /**
     *Device status
     */
    status?: DeviceInfo.status;
    /**
     * User agent
     */
    userAgent?: string;
};

export namespace DeviceInfo {

    /**
     *Device type
     */
    export enum type {
        BROWSER = 'Browser',
        MOBILE = 'Mobile',
        DESKTOP = 'Desktop',
    }

    /**
     *Device status
     */
    export enum status {
        ACTIVATED = 'activated',
        SUSPENDED = 'suspended',
        DEACTIVATED = 'deactivated',
    }


}

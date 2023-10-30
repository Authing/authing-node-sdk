/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeviceInfo = {
    /**
     * 设备唯一标识
     */
    deviceId: string;
    /**
     * 设备名称
     */
    name?: string;
    /**
     * 系统版本
     */
    version?: string;
    /**
     * 设备类型
     */
    type: DeviceInfo.type;
    /**
     * 设备模组
     */
    mod?: string;
    /**
     * 设备系统
     */
    os?: string;
    /**
     * 设备状态
     */
    status?: DeviceInfo.status;
    /**
     * 用户代理
     */
    userAgent?: string;
};

export namespace DeviceInfo {

    /**
     * 设备类型
     */
    export enum type {
        BROWSER = 'Browser',
        MOBILE = 'Mobile',
        DESKTOP = 'Desktop',
    }

    /**
     * 设备状态
     */
    export enum status {
        ACTIVATED = 'activated',
        SUSPENDED = 'suspended',
        DEACTIVATED = 'deactivated',
    }


}

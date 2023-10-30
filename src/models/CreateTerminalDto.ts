/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTerminalDto = {
    /**
     * 设备唯一标识
     */
    deviceUniqueId: string;
    /**
     * 设备类型
     */
    type: CreateTerminalDto.type;
    /**
     * 自定义数据, 自定义数据的属性对应在元数据里自定义的字段
     */
    customData: any;
    /**
     * 设备名称
     */
    name?: string;
    /**
     * 系统版本
     */
    version?: string;
    /**
     * 硬件存储秘钥
     */
    hks?: string;
    /**
     * 磁盘加密
     */
    fde?: string;
    /**
     * 硬件越狱
     */
    hor?: boolean;
    /**
     * 设备序列号
     */
    sn?: string;
    /**
     * 制造商
     */
    producer?: string;
    /**
     * 设备模组
     */
    mod?: string;
    /**
     * 设备系统
     */
    os?: string;
    /**
     * 国际识别码
     */
    imei?: string;
    /**
     * 设备识别码
     */
    meid?: string;
    /**
     * 设备描述
     */
    description?: string;
    /**
     * 设备语言
     */
    language?: string;
    /**
     * 是否开启 Cookies
     */
    cookie?: boolean;
    /**
     * 用户代理
     */
    userAgent?: string;
};

export namespace CreateTerminalDto {

    /**
     * 设备类型
     */
    export enum type {
        BROWSER = 'Browser',
        MOBILE = 'Mobile',
        DESKTOP = 'Desktop',
    }


}

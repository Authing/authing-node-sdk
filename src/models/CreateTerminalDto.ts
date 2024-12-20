/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTerminalDto = {
    /**
     * Custom data, the attributes of custom data correspond to the custom fields in metadata
     */
    customData: any;
    /**
     *Device type
     */
    type: CreateTerminalDto.type;
    /**
     *Unique identification of device
     */
    deviceUniqueId: string;
    /**
     *Device name
     */
    name?: string;
    /**
     * System version
     */
    version?: string;
    /**
     * Hardware storage key
     */
    hks?: string;
    /**
     * Disk encryption
     */
    fde?: string;
    /**
     * Hardware jailbreak
     */
    hor?: boolean;
    /**
     * Device serial number
     */
    sn?: string;
    /**
     *Manufacturer
     */
    producer?: string;
    /**
     *Equipment module
     */
    mod?: string;
    /**
     *Equipment system
     */
    os?: string;
    /**
     * International identification code
     */
    imei?: string;
    /**
     *Device identification code
     */
    meid?: string;
    /**
     *Device description
     */
    description?: string;
    /**
     *Device language
     */
    language?: string;
    /**
     * Whether to enable Cookies
     */
    cookie?: boolean;
    /**
     * User agent
     */
    userAgent?: string;
};

export namespace CreateTerminalDto {

    /**
     *Device type
     */
    export enum type {
        BROWSER = 'Browser',
        MOBILE = 'Mobile',
        DESKTOP = 'Desktop',
    }


}

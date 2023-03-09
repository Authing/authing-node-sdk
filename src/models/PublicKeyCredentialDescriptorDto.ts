/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PublicKeyCredentialDescriptorDto = {
    /**
     * 允许的凭证 ID
     */
    id: string;
    /**
     * 凭证所需的认证器与用户代理的通信方式:
     * - `ble`: 可以通过蓝牙连接的认证器
     * - `internal`: 平台内置的、无法移除的认证器
     * - `nfc`: 可以通过 NFC 连接的认证器
     * - `usb`: 可以通过 USB 连接的认证器
     *
     */
    transports: Array<string>;
    /**
     * 固定值，public-key
     */
    type: string;
};

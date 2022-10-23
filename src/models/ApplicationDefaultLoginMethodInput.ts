/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApplicationDefaultLoginMethodInput = {
    /**
     * 默认的登录类型
     * - `PASSWORD`: 密码类型，取决于你开启的基础登录方式，支持手机号/邮箱/用户名 + 密码进行登录
     * - `PASSCODE`: 验证码类型，取决于你开启的基础登录方式，支持手机号/邮箱 + 验证码进行登录
     * - `QRCODE`: 扫码登录类型，目前包含自建 APP 扫码登录、关注微信公众号扫码登录、微信小程序扫码登录三种类型
     *
     */
    connectionType: ApplicationDefaultLoginMethodInput.connectionType;
    /**
     * 当 `connectionType` 为 `QRCODE` 时，此参数表示二维码类型。
     * - `SELF_BUILT_APP`: 自建 APP 扫码
     * - `WECHAT_OFFICIAL_ACCOUNT`: 扫码关注微信公众号登录
     * - `WECHAT_MINI_PROGRAM`: 微信小程序扫码登录
     *
     */
    qrcodeType?: ApplicationDefaultLoginMethodInput.qrcodeType;
    /**
     * 当 `connectionType` 为 `QRCODE` 时，你需要通过此参数指定具体的扫码登录身份源连接的 ID。
     */
    qrcodeExtIdpConnId?: string;
    /**
     * 当 `connectionType` 为 `AD` 时，你需要通过此参数指定具体的 AD 身份源连接的 ID。
     */
    adExtIdpConnId?: string;
    /**
     * 当 `connectionType` 为 `LDAP` 时，你需要通过此参数指定具体的 LDAP 身份源连接的 ID。
     */
    ldapExtIdpConnId?: string;
};

export namespace ApplicationDefaultLoginMethodInput {

    /**
     * 默认的登录类型
     * - `PASSWORD`: 密码类型，取决于你开启的基础登录方式，支持手机号/邮箱/用户名 + 密码进行登录
     * - `PASSCODE`: 验证码类型，取决于你开启的基础登录方式，支持手机号/邮箱 + 验证码进行登录
     * - `QRCODE`: 扫码登录类型，目前包含自建 APP 扫码登录、关注微信公众号扫码登录、微信小程序扫码登录三种类型
     *
     */
    export enum connectionType {
        PASSCODE = 'PASSCODE',
        PASSWORD = 'PASSWORD',
        QRCODE = 'QRCODE',
        LDAP = 'LDAP',
        AD = 'AD',
    }

    /**
     * 当 `connectionType` 为 `QRCODE` 时，此参数表示二维码类型。
     * - `SELF_BUILT_APP`: 自建 APP 扫码
     * - `WECHAT_OFFICIAL_ACCOUNT`: 扫码关注微信公众号登录
     * - `WECHAT_MINI_PROGRAM`: 微信小程序扫码登录
     *
     */
    export enum qrcodeType {
        SELF_BUILT_APP = 'SELF_BUILT_APP',
        WECHAT_OFFICIAL_ACCOUNT = 'WECHAT_OFFICIAL_ACCOUNT',
        WECHAT_MINI_PROGRAM = 'WECHAT_MINI_PROGRAM',
    }


}

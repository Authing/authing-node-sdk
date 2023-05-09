/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TenantUserDto = {
    /**
     * 邮箱，不区分大小写
     */
    email?: string;
    /**
     * 手机号，不带区号。如果是国外手机号，请在 phoneCountryCode 参数中指定区号。
     */
    phone?: string;
    /**
     * 手机区号，中国大陆手机号可不填。Authing 短信服务暂不内置支持国际手机号，你需要在 Authing 控制台配置对应的国际短信服务。完整的手机区号列表可参阅 https://en.wikipedia.org/wiki/List_of_country_calling_codes。
     */
    phoneCountryCode?: string;
    /**
     * 用户名，用户池内唯一
     */
    username?: string;
    /**
     * 用户真实名称，不具备唯一性
     */
    name?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 头像链接
     */
    photo?: string;
    /**
     * 历史总登录次数
     */
    loginsCount?: number;
    /**
     * 上次登录 IP
     */
    lastIp?: string;
    /**
     * 性别:
     * - `M`: 男性，`male`
     * - `F`: 女性，`female`
     * - `U`: 未知，`unknown`
     *
     */
    gender: TenantUserDto.gender;
    /**
     * 出生日期
     */
    birthdate?: string;
    /**
     * 所在国家
     */
    country?: string;
    /**
     * 所在省份
     */
    province?: string;
    /**
     * 所在城市
     */
    city?: string;
    /**
     * 所处地址
     */
    address?: string;
    /**
     * 所处街道地址
     */
    streetAddress?: string;
    /**
     * 邮政编码号
     */
    postalCode?: string;
    /**
     * 名
     */
    givenName?: string;
    /**
     * 姓
     */
    familyName?: string;
    /**
     * 中间名
     */
    middleName?: string;
    /**
     * Preferred Username
     */
    preferredUsername?: string;
    /**
     * 用户上次登录的应用 ID
     */
    lastLoginApp?: string;
    /**
     * 用户池 ID
     */
    userPoolId: string;
    /**
     * 租户 ID
     */
    tenantId: string;
    /**
     * 租户成员 ID
     */
    memberId: string;
    /**
     * 关联的用户池级别的用户 ID
     */
    linkUserId: string;
    /**
     * 是否为租户管理员
     */
    isTenantAdmin: boolean;
    /**
     * 用户密码，默认为明文。我们使用 HTTPS 协议对密码进行安全传输，可以在一定程度上保证安全性。如果你还需要更高级别的安全性，我们还支持 RSA256 和国密 SM2 两种方式对密码进行加密。详情见 `passwordEncryptType` 参数。
     */
    password?: string;
    /**
     * 加密用户密码的盐
     */
    salt?: string;
};

export namespace TenantUserDto {

    /**
     * 性别:
     * - `M`: 男性，`male`
     * - `F`: 女性，`female`
     * - `U`: 未知，`unknown`
     *
     */
    export enum gender {
        M = 'M',
        F = 'F',
        U = 'U',
    }


}

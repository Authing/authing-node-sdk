/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignUpProfileDto = {
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 公司
     */
    company?: string;
    /**
     * 头像
     */
    photo?: string;
    /**
     * 设备
     */
    device?: string;
    /**
     * 浏览器
     */
    browser?: string;
    /**
     * 名称
     */
    name?: string;
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
     * 资料
     */
    profile?: string;
    /**
     * 希望称呼的用户名
     */
    preferredUsername?: string;
    /**
     * 网站
     */
    website?: string;
    /**
     * 性别 W : 女性; M : 男性
     */
    gender?: SignUpProfileDto.gender;
    /**
     * 生日
     */
    birthdate?: string;
    /**
     * 地区
     */
    zoneinfo?: string;
    /**
     * 语言地区
     */
    locale?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 格式
     */
    formatted?: string;
    /**
     * 街道地址
     */
    streetAddress?: string;
    /**
     * 位置
     */
    locality?: string;
    /**
     * 地区
     */
    region?: string;
    /**
     * 邮政编码
     */
    postalCode?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 用户邮箱。如果要补全邮箱，必须在 `options.emailPassCodeForInformationCompletion` 传入邮箱验证码。发送邮箱验证码可以使用 /api/v3/send-email 接口。
     */
    email?: string;
    /**
     * 用户手机号。如果要补全手机号，必须在 `options.phonePassCodeForInformationCompletion` 传入手机号验证码。发送手机号验证码可以使用 /api/v3/send-sms 接口。
     */
    phone?: string;
    /**
     * 用户手机区号
     */
    phoneCountryCode?: string;
    /**
     * 用户自定义字段
     */
    customData?: any;
};

export namespace SignUpProfileDto {

    /**
     * 性别 W : 女性; M : 男性
     */
    export enum gender {
        M = 'M',
        F = 'F',
        U = 'U',
    }


}

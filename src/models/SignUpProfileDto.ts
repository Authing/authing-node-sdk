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
     * 邮箱
     */
    email?: string;
    /**
     * 手机号
     */
    phone?: string;
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

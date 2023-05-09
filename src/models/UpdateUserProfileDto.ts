/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateUserProfileDto = {
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
     * 第三方外部 ID
     */
    externalId?: string;
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
     * 性别
     */
    gender?: UpdateUserProfileDto.gender;
    /**
     * 用户名，用户池内唯一
     */
    username?: string;
    /**
     * 所在公司
     */
    company?: string;
    /**
     * 自定义数据，传入的对象中的 key 必须先在用户池定义相关自定义字段
     */
    customData?: any;
    /**
     * 用户身份证号码
     */
    identityNumber?: string;
};

export namespace UpdateUserProfileDto {

    /**
     * 性别
     */
    export enum gender {
        M = 'M',
        F = 'F',
        U = 'U',
    }


}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateUserReqDto = {
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 手机区号
     */
    phoneCountryCode?: string;
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
     * 账户当前状态
     */
    status?: UpdateUserReqDto.status;
    /**
     * 邮箱是否验证
     */
    emailVerified?: boolean;
    /**
     * 手机号是否验证
     */
    phoneVerified?: boolean;
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
    gender?: UpdateUserReqDto.gender;
    /**
     * 用户名，用户池内唯一
     */
    username?: string;
    /**
     * 加密类型
     */
    passwordEncryptType?: UpdateUserReqDto.passwordEncryptType;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 手机号
     */
    phone?: string;
    /**
     * 密码。可选加密方式进行加密，默认为未加密
     */
    password?: string;
    /**
     * 自定义数据，传入的对象中的 key 必须先在用户池定义相关自定义字段
     */
    customData?: any;
};

export namespace UpdateUserReqDto {

    /**
     * 账户当前状态
     */
    export enum status {
        DELETED = 'Deleted',
        SUSPENDED = 'Suspended',
        RESIGNED = 'Resigned',
        ACTIVATED = 'Activated',
        ARCHIVED = 'Archived',
    }

    /**
     * 性别
     */
    export enum gender {
        M = 'M',
        W = 'W',
        U = 'U',
    }

    /**
     * 加密类型
     */
    export enum passwordEncryptType {
        SM2 = 'sm2',
        RSA = 'rsa',
        NONE = 'none',
    }


}

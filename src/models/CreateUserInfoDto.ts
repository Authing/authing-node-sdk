/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateIdentityDto } from './CreateIdentityDto';

export type CreateUserInfoDto = {
    /**
     * 账户当前状态
     */
    status?: CreateUserInfoDto.status;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 加密类型
     */
    passwordEncryptType?: CreateUserInfoDto.passwordEncryptType;
    /**
     * 手机号
     */
    phone?: string;
    /**
     * 手机区号
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
     * 性别
     */
    gender?: CreateUserInfoDto.gender;
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
     * 第三方外部 ID
     */
    externalId?: string;
    /**
     * 用户所属部门 ID 列表
     */
    departmentIds?: Array<string>;
    /**
     * 自定义数据，传入的对象中的 key 必须先在用户池定义相关自定义字段
     */
    customData?: any;
    /**
     * 密码。可选加密方式进行加密，默认为未加密
     */
    password?: string;
    /**
     * 租户 ID
     */
    tenantIds?: Array<string>;
    /**
     * 第三方身份源（建议调用绑定接口进行绑定）
     */
    identities?: Array<CreateIdentityDto>;
};

export namespace CreateUserInfoDto {

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
     * 加密类型
     */
    export enum passwordEncryptType {
        SM2 = 'sm2',
        RSA = 'rsa',
        NONE = 'none',
    }

    /**
     * 性别
     */
    export enum gender {
        M = 'M',
        W = 'W',
        U = 'U',
    }


}

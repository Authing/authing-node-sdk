/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IdentityDto } from './IdentityDto';

export type UserDto = {
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 账号创建时间
     */
    createdAt: string;
    /**
     * 账户当前状态
     */
    status: UserDto.status;
    /**
     * 邮箱
     */
    email?: string;
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
     * 历史总登录次数
     */
    loginsCount?: number;
    /**
     * 上次登录时间
     */
    lastLogin?: string;
    /**
     * 上次登录 IP
     */
    lastIp?: string;
    /**
     * 性别
     */
    gender: UserDto.gender;
    /**
     * 邮箱是否验证
     */
    emailVerified: boolean;
    /**
     * 手机号是否验证
     */
    phoneVerified: boolean;
    /**
     * 用户上次密码修改时间
     */
    passwordLastSetAt?: string;
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
     * 下次登录要求重置密码
     */
    resetPasswordOnNextLogin?: boolean;
    /**
     * 用户所属部门 ID 列表
     */
    departmentIds?: Array<string>;
    /**
     * 外部身份源
     */
    identities?: Array<IdentityDto>;
    /**
     * 用户的扩展字段数据
     */
    customData?: any;
    /**
     * 用户状态上次修改时间
     */
    statusChangedAt?: string;
};

export namespace UserDto {

    /**
     * 账户当前状态
     */
    export enum status {
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


}

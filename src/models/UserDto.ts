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
     * 第三方外部 ID
     */
    externalId?: string;
    /**
     * 用户所属部门 ID 列表
     */
    departmentIds?: Array<string>;
    /**
     * 外部身份源
     */
    identities?: Array<IdentityDto>;
    /**
     * 自定义数据，传入的对象中的 key 必须先在用户池定义相关自定义字段
     */
    customData?: any;
};

export namespace UserDto {

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


}

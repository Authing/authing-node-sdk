/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IdentityDto } from './IdentityDto';

export type UserDto = {
    /**
     * 用户唯一标志，可以是用户 ID、用户名、邮箱、手机号、外部 ID、在外部身份源的 ID。
     */
    userId: string;
    /**
     * 创建时间
     */
    createdAt: string;
    /**
     * 更新时间
     */
    updatedAt: string;
    /**
     * 账户当前状态
     */
    status: UserDto.status;
    /**
     * 账户当前工作状态
     */
    workStatus: UserDto.workStatus;
    /**
     * 第三方外部 ID
     */
    externalId?: string;
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
     * 上次登录时间
     */
    lastLogin?: string;
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
     * 所在公司
     */
    company?: string;
    /**
     * 最近一次登录时使用的浏览器 UA
     */
    browser?: string;
    /**
     * 最近一次登录时使用的设备
     */
    device?: string;
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
    profile?: string;
    /**
     * Preferred Username
     */
    preferredUsername?: string;
    /**
     * 用户个人网页
     */
    website?: string;
    /**
     * 用户时区信息
     */
    zoneinfo?: string;
    /**
     * Locale
     */
    locale?: string;
    /**
     * 标准的完整地址
     */
    formatted?: string;
    /**
     * 用户所在区域
     */
    region?: string;
    /**
     * 来源类型:
     * - `excel`: 通过 excel 导入
     * - `register`: 用户自主注册
     * - `adminCreated`: 管理员后台手动创建（包含使用管理 API 创建用户 ）
     * - `syncTask`: 同步中心的同步任务
     *
     */
    userSourceType: UserDto.userSourceType;
    /**
     * 应用 ID 或者同步任务 ID
     */
    userSourceId?: string;
    /**
     * 用户上次登录的应用 ID
     */
    lastLoginApp?: string;
    /**
     * 用户主部门 ID
     */
    mainDepartmentId?: string;
    /**
     * 用户上次进行 MFA 认证的时间
     */
    lastMfaTime?: string;
    /**
     * 用户密码安全强度等级
     */
    passwordSecurityLevel?: number;
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
        DEACTIVATED = 'Deactivated',
    }

    /**
     * 账户当前工作状态
     */
    export enum workStatus {
        CLOSED = 'Closed',
        ACTIVE = 'Active',
    }

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

    /**
     * 来源类型:
     * - `excel`: 通过 excel 导入
     * - `register`: 用户自主注册
     * - `adminCreated`: 管理员后台手动创建（包含使用管理 API 创建用户 ）
     * - `syncTask`: 同步中心的同步任务
     *
     */
    export enum userSourceType {
        EXCEL = 'excel',
        REGISTER = 'register',
        ADMIN_CREATED = 'adminCreated',
        SYNC = 'sync',
    }


}

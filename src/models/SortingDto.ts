/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SortingDto = {
    /**
     * 进行排序的字段，可选值为：
     * - `createdAt`: 创建时间
     * - `updatedAt`: 修改时间
     * - `email`: 邮箱
     * - `phone`: 手机号
     * - `username`: 用户名
     * - `externalId`: 外部 ID
     * - `status`: 公共账号状态
     * - `statusChangedAt`: 状态修改时间
     * - `passwordLastSetAt`: 密码修改时间
     * - `loginsCount`: 登录次数
     * - `gender`: 性别
     * - `lastLogin`: 上次登录时间
     * - `userSourceType`: 公共账号注册来源
     * - `lastMfaTime`: 上次 MFA 认证时间
     * - `passwordSecurityLevel`: 密码安全等级
     * - `phoneCountryCode`: 手机区号
     * - `lastIp`: 上次登录时使用的 IP
     *
     */
    field: SortingDto.field;
    /**
     * 排序顺序：
     * - `desc`: 按照从大到小降序。
     * - `asc`: 按照从小到大升序。
     *
     */
    order: SortingDto.order;
};

export namespace SortingDto {

    /**
     * 进行排序的字段，可选值为：
     * - `createdAt`: 创建时间
     * - `updatedAt`: 修改时间
     * - `email`: 邮箱
     * - `phone`: 手机号
     * - `username`: 用户名
     * - `externalId`: 外部 ID
     * - `status`: 公共账号状态
     * - `statusChangedAt`: 状态修改时间
     * - `passwordLastSetAt`: 密码修改时间
     * - `loginsCount`: 登录次数
     * - `gender`: 性别
     * - `lastLogin`: 上次登录时间
     * - `userSourceType`: 公共账号注册来源
     * - `lastMfaTime`: 上次 MFA 认证时间
     * - `passwordSecurityLevel`: 密码安全等级
     * - `phoneCountryCode`: 手机区号
     * - `lastIp`: 上次登录时使用的 IP
     *
     */
    export enum field {
        CREATED_AT = 'createdAt',
        UPDATED_AT = 'updatedAt',
        EMAIL = 'email',
        USERNAME = 'username',
        EXTERNAL_ID = 'externalId',
        PHONE = 'phone',
        STATUS = 'status',
        STATUS_CHANGED_AT = 'statusChangedAt',
        PASSWORD_LAST_SET_AT = 'passwordLastSetAt',
        LOGINS_COUNT = 'loginsCount',
        GENDER = 'gender',
        LAST_LOGIN = 'lastLogin',
        USER_SOURCE_TYPE = 'userSourceType',
        LAST_MFA_TIME = 'lastMfaTime',
        PASSWORD_SECURITY_LEVEL = 'passwordSecurityLevel',
        PHONE_COUNTRY_CODE = 'phoneCountryCode',
        LAST_IP = 'lastIp',
    }

    /**
     * 排序顺序：
     * - `desc`: 按照从大到小降序。
     * - `asc`: 按照从小到大升序。
     *
     */
    export enum order {
        DESC = 'desc',
        ASC = 'asc',
    }


}

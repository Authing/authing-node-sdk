/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GeoIp } from './GeoIp';
import type { ParsedUserAgent } from './ParsedUserAgent';

export type UserActionLogDto = {
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 用户头像
     */
    userAvatar: string;
    /**
     * 用户显示名称，按照以下用户字段顺序进行展示：nickname > username > name > givenName > familyName -> email -> phone -> id
     */
    userDisplayName: string;
    /**
     * 用户登录次数
     */
    userLoginsCount: number;
    /**
     * 应用 ID
     */
    appId: string;
    /**
     * 应用名称
     */
    appName: string;
    /**
     * 客户端 IP，可根据登录时的客户端 IP 进行筛选。默认不传获取所有登录 IP 的登录历史。
     */
    clientIp?: string;
    /**
     * 事件类型：
     * - `login`: 登录
     * - `logout`: 登出
     * - `register`: 注册
     * - `verifyMfa`: 验证 MFA
     * - `updateUserProfile`: 修改用户信息
     * - `updateUserPassword`: 修改密码
     * - `updateUserEmail`: 修改邮箱
     * - `updateUserPhone`: 修改手机号
     * - `bindMfa`: 绑定 MFA
     * - `bindEmail`: 绑定邮箱
     * - `bindPhone`: 绑定手机号
     * - `unbindPhone`: 解绑手机号
     * - `unbindEmail`: 解绑邮箱
     * - `unbindMFA`: 解绑 MFA
     * - `deleteAccount`: 注销账号
     * - `verifyFirstLogin`: 首次登录验证
     *
     */
    eventType: UserActionLogDto.eventType;
    /**
     * 事件详情
     */
    eventDetail?: string;
    /**
     * 是否成功
     */
    success: boolean;
    /**
     * 应用登录地址
     */
    appLoginUrl: string;
    /**
     * 应用 Logo
     */
    appLogo: string;
    /**
     * User Agent
     */
    userAgent: string;
    /**
     * 解析过后的 User Agent
     */
    parsedUserAgent: ParsedUserAgent;
    /**
     * 地理位置
     */
    geoip: GeoIp;
    /**
     * 时间
     */
    timestamp: string;
    /**
     * 请求 ID
     */
    requestId: string;
};

export namespace UserActionLogDto {

    /**
     * 事件类型：
     * - `login`: 登录
     * - `logout`: 登出
     * - `register`: 注册
     * - `verifyMfa`: 验证 MFA
     * - `updateUserProfile`: 修改用户信息
     * - `updateUserPassword`: 修改密码
     * - `updateUserEmail`: 修改邮箱
     * - `updateUserPhone`: 修改手机号
     * - `bindMfa`: 绑定 MFA
     * - `bindEmail`: 绑定邮箱
     * - `bindPhone`: 绑定手机号
     * - `unbindPhone`: 解绑手机号
     * - `unbindEmail`: 解绑邮箱
     * - `unbindMFA`: 解绑 MFA
     * - `deleteAccount`: 注销账号
     * - `verifyFirstLogin`: 首次登录验证
     *
     */
    export enum eventType {
        LOGIN = 'login',
        LOGOUT = 'logout',
        REGISTER = 'register',
        VERIFY_MFA = 'verifyMfa',
        UPDATE_USER_PREFILE = 'updateUserPrefile',
        UPDATE_USER_PASSWORD = 'updateUserPassword',
        UPDATE_USER_EMAIL = 'updateUserEmail',
        UPDATE_USER_PHONE = 'updateUserPhone',
        BIND_MFA = 'bindMfa',
        BIND_EMAIL = 'bindEmail',
        BIND_PHONE = 'bindPhone',
        UNBIND_PHONE = 'unbindPhone',
        UNBIND_EMAIL = 'unbindEmail',
        UNBIND_MFA = 'unbindMFA',
        REFRESH_USER_TOKEN_BY_SELF = 'refreshUserTokenBySelf',
        DELETE_ACCOUNT = 'deleteAccount',
        VERIFY_FIRST_LOGIN = 'verifyFirstLogin',
        SECURITY_RESOURCE_ACCESS = 'securityResourceAccess',
    }


}

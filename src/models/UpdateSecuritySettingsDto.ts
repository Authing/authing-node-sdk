/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChangeEmailStrategyDto } from './ChangeEmailStrategyDto';
import type { ChangePhoneStrategyDto } from './ChangePhoneStrategyDto';
import type { CookieSettingsDto } from './CookieSettingsDto';
import type { LoginAnomalyDetectionConfigDto } from './LoginAnomalyDetectionConfigDto';
import type { QrcodeLoginStrategyDto } from './QrcodeLoginStrategyDto';
import type { RegisterAnomalyDetectionConfigDto } from './RegisterAnomalyDetectionConfigDto';
import type { SelfUnlockAccountConfigDto } from './SelfUnlockAccountConfigDto';

export type UpdateSecuritySettingsDto = {
    /**
     * 安全域（CORS）
     */
    allowedOrigins?: Array<string>;
    /**
     * Authing Token 有效时间（秒）
     */
    authingTokenExpiresIn?: number;
    /**
     * 验证码长度。包含短信验证码、邮件验证码和图形验证码。
     */
    verifyCodeLength?: number;
    /**
     * 验证码尝试次数。在一个验证码有效周期内（默认为 60 s），用户输入验证码错误次数超过此阈值之后，将会导致当前验证码失效，需要重新发送。
     */
    verifyCodeMaxAttempts?: number;
    /**
     * 用户修改邮箱的安全策略
     */
    changeEmailStrategy?: ChangeEmailStrategyDto;
    /**
     * 用户修改手机号的安全策略
     */
    changePhoneStrategy?: ChangePhoneStrategyDto;
    /**
     * Cookie 过期时间设置
     */
    cookieSettings?: CookieSettingsDto;
    /**
     * 是否禁止用户注册，开启之后，用户将无法自主注册，只能管理员为其创建账号。针对 B2B 和 B2E 类型用户池，默认开启。
     */
    registerDisabled?: boolean;
    /**
     * 频繁注册检测配置
     */
    registerAnomalyDetection?: RegisterAnomalyDetectionConfigDto;
    /**
     * 验证码注册后是否要求用户设置密码（仅针对 Authing 登录页和 Guard 有效，不针对 API 调用）。
     */
    completePasswordAfterPassCodeLogin?: boolean;
    /**
     * 登录防暴破配置
     */
    loginAnomalyDetection?: LoginAnomalyDetectionConfigDto;
    /**
     * 当使用邮箱登录时，未验证的邮箱登录时是否禁止登录并发送认证邮件。当用户收到邮件并完成验证之后，才能进行登录。
     */
    loginRequireEmailVerified?: boolean;
    /**
     * 用户自助解锁配置。注：只有绑定了手机号/邮箱的用户才可以自助解锁
     */
    selfUnlockAccount?: SelfUnlockAccountConfigDto;
    /**
     * Authing 登录页面是否开启登录账号选择
     */
    enableLoginAccountSwitch?: boolean;
    /**
     * APP 扫码登录安全配置
     */
    qrcodeLoginStrategy?: QrcodeLoginStrategyDto;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoginFailCheckConfigDto } from './LoginFailCheckConfigDto';
import type { LoginIpWhitelistCheckConfigDto } from './LoginIpWhitelistCheckConfigDto';
import type { LoginPassowrdFailCheckConfigDto } from './LoginPassowrdFailCheckConfigDto';

export type LoginAnomalyDetectionConfigDto = {
    /**
     * 登录安全策略。当用户触发登录失败频率检测时，采用什么策略。目前支持验证码和锁定账号两种策略。当选择账号锁定策略的时候，只可以开启「登录密码错误限制」。此字段标志为过时，但是此字段还是必传的，如果使用新版本逻辑可以默认写一个。新版本账号锁定使用 accountLock，验证码使用 robotVerify
     */
    loginFailStrategy: LoginAnomalyDetectionConfigDto.loginFailStrategy;
    /**
     * 人机验证（验证码）策略。可选值，disable（不开启）/condition_set（条件开启）/always_enable （始终开启）
     */
    robotVerify: string;
    /**
     * 账号锁定策略。可选值，disable（不开启）/condition_set（条件开启）
     */
    accountLock: string;
    /**
     * 登录失败次数限制：当用户登录输入信息错误的时候会被按照「登录安全策略」规则触发相对应的策略。
     */
    loginFailCheck: LoginFailCheckConfigDto;
    /**
     * 登录密码错误限制：当用户登录输入密码信息错误的时候会被按照「登录安全策略」规则触发相对应的策略。此字段被标志为过时，见 accountLockLoginPasswordFailCheck/ robotVerifyLoginPasswordFailCheck
     */
    loginPasswordFailCheck: LoginPassowrdFailCheckConfigDto;
    /**
     * 账号锁定-登录密码错误限制：当用户登录输入密码信息错误的时候会被按照「登录安全策略」规则触发相对应的策略。
     */
    accountLockLoginPasswordFailCheck?: LoginPassowrdFailCheckConfigDto;
    /**
     * 人机验证（验证码）-登录密码错误限制：当用户登录输入密码信息错误的时候会被按照「登录安全策略」规则触发相对应的策略。
     */
    robotVerifyLoginPasswordFailCheck: LoginPassowrdFailCheckConfigDto;
    /**
     * 人机验证（验证码）- ip 白名单：当登录者 ip 不在白名单会触发人机验证。
     */
    robotVerifyLoginIpWhitelistCheck: LoginIpWhitelistCheckConfigDto;
    /**
     * 是否开启登录时间限制
     */
    robotVerifyLoginTimeCheckEnable: boolean;
    /**
     * 登录时间限制周几+起始时间数组
     */
    robotVerifyloginWeekStartEndTime: Array<string>;
};

export namespace LoginAnomalyDetectionConfigDto {

    /**
     * 登录安全策略。当用户触发登录失败频率检测时，采用什么策略。目前支持验证码和锁定账号两种策略。当选择账号锁定策略的时候，只可以开启「登录密码错误限制」。此字段标志为过时，但是此字段还是必传的，如果使用新版本逻辑可以默认写一个。新版本账号锁定使用 accountLock，验证码使用 robotVerify
     */
    export enum loginFailStrategy {
        CAPTCHA = 'captcha',
        BLOCK_ACCOUNT = 'block-account',
    }


}

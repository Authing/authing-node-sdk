/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoginFailCheckConfigDto } from './LoginFailCheckConfigDto';
import type { LoginPassowrdFailCheckConfigDto } from './LoginPassowrdFailCheckConfigDto';

export type LoginAnomalyDetectionConfigDto = {
    /**
     * 登录安全策略。当用户触发登录失败频率检测时，采用什么策略。目前支持验证码和锁定账号两种策略。当选择账号锁定策略的时候，只可以开启「登录密码错误限制」。
     */
    loginFailStrategy: LoginAnomalyDetectionConfigDto.loginFailStrategy;
    /**
     * 登录失败次数限制：当用户登录输入信息错误的时候会被按照「登录安全策略」规则触发相对应的策略。
     */
    loginFailCheck: LoginFailCheckConfigDto;
    /**
     * 登录密码错误限制：当用户登录输入密码信息错误的时候会被按照「登录安全策略」规则触发相对应的策略。
     */
    loginPasswordFailCheck: LoginPassowrdFailCheckConfigDto;
};

export namespace LoginAnomalyDetectionConfigDto {

    /**
     * 登录安全策略。当用户触发登录失败频率检测时，采用什么策略。目前支持验证码和锁定账号两种策略。当选择账号锁定策略的时候，只可以开启「登录密码错误限制」。
     */
    export enum loginFailStrategy {
        CAPTCHA = 'captcha',
        BLOCK_ACCOUNT = 'block-account',
    }


}

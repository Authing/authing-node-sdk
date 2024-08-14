/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SignInByDouyinMiniProgramCodePayloadDto } from './SignInByDouyinMiniProgramCodePayloadDto';
import type { SignInByDouyinMiniProgramPhoneInfoPayloadDto } from './SignInByDouyinMiniProgramPhoneInfoPayloadDto';

export type SignInByDouyinMiniProgramCodeAndPhonePayloadDto = {
    /**
     * 抖音小程序使用 code 登录相关数据，如 使用 `tt.getUserProfile` 获得的用户数据，必填
     */
    loginParams: SignInByDouyinMiniProgramCodePayloadDto;
    /**
     * 必填，抖音小程序用户授权使用手机号登录相关数据。如果是新用户注册到用户池，手机号将会同步更新到用户信息；如果用户池用户已存在，若用户没有绑定过手机号且从小程序授权的手机号未被绑定过，将会把手机号更新到用户信息上。
     */
    phoneParams: SignInByDouyinMiniProgramPhoneInfoPayloadDto;
};

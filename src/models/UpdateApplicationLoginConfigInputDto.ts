/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApplicationDefaultLoginMethodInput } from './ApplicationDefaultLoginMethodInput';

export type UpdateApplicationLoginConfigInputDto = {
    /**
     * 是否开启登录注册合并
     */
    mergeLoginAndRegisterPage?: boolean;
    /**
     * 开启的基础登录方式
     */
    enabledBasicLoginMethods?: Array<'PHONE_CODE' | 'EMAIL_CODE' | 'PHONE_PASSWORD' | 'EMAIL_PASSWORD' | 'USERNAME_PASSWORD' | 'SELF_BUILT_APP_QRCODE'>;
    /**
     * 应用默认登录方式（不包含社会化登录和企业身份源登录）
     */
    defaultLoginMethod?: ApplicationDefaultLoginMethodInput;
    /**
     * 是否展示用户授权页面
     */
    showAuthorizationPage: boolean;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthenticateByAlipayDto } from './AuthenticateByAlipayDto';
import type { AuthenticateByGoogleDto } from './AuthenticateByGoogleDto';
import type { AuthenticateByLarkInternalDto } from './AuthenticateByLarkInternalDto';
import type { AuthenticateByLarkPublicDto } from './AuthenticateByLarkPublicDto';
import type { AuthenticateByWechatDto } from './AuthenticateByWechatDto';
import type { AuthenticateByWechatMiniProgramCodeDto } from './AuthenticateByWechatMiniProgramCodeDto';
import type { AuthenticateByWechatMiniProgramPhoneDto } from './AuthenticateByWechatMiniProgramPhoneDto';
import type { AuthenticateByWechatworkAgencyDto } from './AuthenticateByWechatworkAgencyDto';
import type { AuthenticateByWechatworkDto } from './AuthenticateByWechatworkDto';
import type { AuthenticateByYidunDto } from './AuthenticateByYidunDto';
import type { SignInByMobileOptionsDto } from './SignInByMobileOptionsDto';

export type SigninByMobileDto = {
    /**
     * 外部身份源连接标志符
     */
    extIdpConnidentifier: string;
    /**
     * 移动端社会化登录类型：
     * - `wechat`: 微信移动应用
     * - `alipay`: 支付宝移动应用
     * - `wechatwork`: 企业微信移动应用
     * - `wechatwork_agency`: 企业微信移动应用（代开发模式）
     * - `lark_internal`: 飞书移动端企业自建应用
     * - `lark_public`: 飞书移动端应用商店应用
     * - `yidun`: 网易易盾一键登录
     * - `wechat_mini_program_code`: 微信小程序使用 code 登录
     * - `wechat_mini_program_phone `: 微信小程序使用手机号登录
     * - `google`: Google 移动端社会化登录
     *
     */
    connection: SigninByMobileDto.connection;
    /**
     * 微信移动端社会化登录数据，当 `connection` 为 `wechat` 的时候必填
     */
    wechatPayload?: AuthenticateByWechatDto;
    /**
     * 支付宝移动端社会化登录数据，当 `connection` 为 `alipay` 的时候必填
     */
    alipayPayload?: AuthenticateByAlipayDto;
    /**
     * 企业微信移动端社会化登录数据，当 `connection` 为 `wechatwork` 的时候必填
     */
    wechatworkPayload?: AuthenticateByWechatworkDto;
    /**
     * 企业微信（代开发模式）移动端社会化登录数据，当 `connection` 为 `wechatwork_agency` 的时候必填
     */
    wechatworkAgencyPayload?: AuthenticateByWechatworkAgencyDto;
    /**
     * 飞书应用商店应用移动端社会化登录数据，当 `connection` 为 `lark_public` 的时候必填
     */
    larkPublicPayload?: AuthenticateByLarkPublicDto;
    /**
     * 飞书自建应用移动端社会化登录数据，当 `connection` 为 `lark_internal` 的时候必填
     */
    larkInternalPayload?: AuthenticateByLarkInternalDto;
    /**
     * 网易易盾移动端社会化登录数据，当 `connection` 为 `yidun` 的时候必填
     */
    yidunPayload?: AuthenticateByYidunDto;
    /**
     * 网易易盾移动端社会化登录数据，当 `connection` 为 `wechat_mini_program_code` 的时候必填
     */
    wechatMiniProgramCodePayload?: AuthenticateByWechatMiniProgramCodeDto;
    /**
     * 网易易盾移动端社会化登录数据，当 `connection` 为 `wechat_mini_program_phone` 的时候必填
     */
    wechatMiniProgramPhonePayload?: AuthenticateByWechatMiniProgramPhoneDto;
    /**
     * Google 移动端社会化登录数据，当 `connection` 为 `google` 的时候必填
     */
    googlePayload?: AuthenticateByGoogleDto;
    /**
     * 可选参数
     */
    options?: SignInByMobileOptionsDto;
    /**
     * 应用 ID。当应用的「换取 token 身份验证方式」配置为 `client_secret_post` 需要传。
     */
    client_id?: string;
    /**
     * 应用密钥。当应用的「换取 token 身份验证方式」配置为 `client_secret_post` 需要传。
     */
    client_secret?: string;
};

export namespace SigninByMobileDto {

    /**
     * 移动端社会化登录类型：
     * - `wechat`: 微信移动应用
     * - `alipay`: 支付宝移动应用
     * - `wechatwork`: 企业微信移动应用
     * - `wechatwork_agency`: 企业微信移动应用（代开发模式）
     * - `lark_internal`: 飞书移动端企业自建应用
     * - `lark_public`: 飞书移动端应用商店应用
     * - `yidun`: 网易易盾一键登录
     * - `wechat_mini_program_code`: 微信小程序使用 code 登录
     * - `wechat_mini_program_phone `: 微信小程序使用手机号登录
     * - `google`: Google 移动端社会化登录
     *
     */
    export enum connection {
        WECHAT = 'wechat',
        ALIPAY = 'alipay',
        WECHATWORK = 'wechatwork',
        WECHATWORK_AGENCY = 'wechatwork_agency',
        LARK_INTERNAL = 'lark_internal',
        LARK_PUBLIC = 'lark_public',
        YIDUN = 'yidun',
        WECHAT_MINI_PROGRAM_CODE = 'wechat_mini_program_code',
        WECHAT_MINI_PROGRAM_PHONE = 'wechat_mini_program_phone',
        GOOGLE = 'google',
    }


}

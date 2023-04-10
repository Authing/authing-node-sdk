/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SignInByAlipayPayloadDto } from './SignInByAlipayPayloadDto';
import type { SignInByAmazonPayloadDto } from './SignInByAmazonPayloadDto';
import type { SignInByApplePayloadDto } from './SignInByApplePayloadDto';
import type { SignInByBaiduPayloadDto } from './SignInByBaiduPayloadDto';
import type { SignInByDingTalkPayloadDto } from './SignInByDingTalkPayloadDto';
import type { SignInByDouyinPayloadDto } from './SignInByDouyinPayloadDto';
import type { SignInByFacebookPayloadDto } from './SignInByFacebookPayloadDto';
import type { SignInByGiteePayloadDto } from './SignInByGiteePayloadDto';
import type { SignInByGithubPayloadDto } from './SignInByGithubPayloadDto';
import type { SignInByGitlabPayloadDto } from './SignInByGitlabPayloadDto';
import type { SignInByGooglePayloadDto } from './SignInByGooglePayloadDto';
import type { SignInByHuaweiPayloadDto } from './SignInByHuaweiPayloadDto';
import type { SignInByKuaishouPayloadDto } from './SignInByKuaishouPayloadDto';
import type { SignInByLarkInternalPayloadDto } from './SignInByLarkInternalPayloadDto';
import type { SignInByLarkPublicPayloadDto } from './SignInByLarkPublicPayloadDto';
import type { SignInByLinePayloadDto } from './SignInByLinePayloadDto';
import type { SignInByLinkedInPayloadDto } from './SignInByLinkedInPayloadDto';
import type { SignInByMobileOptionsDto } from './SignInByMobileOptionsDto';
import type { SignInByOPPOPayloadDto } from './SignInByOPPOPayloadDto';
import type { SignInByQQPayloadDto } from './SignInByQQPayloadDto';
import type { SignInBySlackPayloadDto } from './SignInBySlackPayloadDto';
import type { SignInByWechatMiniProgramCodeAndPhonePayloadDto } from './SignInByWechatMiniProgramCodeAndPhonePayloadDto';
import type { SignInByWechatMiniProgramCodePayloadDto } from './SignInByWechatMiniProgramCodePayloadDto';
import type { SignInByWechatMiniProgramPhonePayloadDto } from './SignInByWechatMiniProgramPhonePayloadDto';
import type { SignInByWechatPayloadDto } from './SignInByWechatPayloadDto';
import type { SignInByWechatworkAgencyPayloadDto } from './SignInByWechatworkAgencyPayloadDto';
import type { SignInByWechatworkDto } from './SignInByWechatworkDto';
import type { SignInByWeiboPayloadDto } from './SignInByWeiboPayloadDto';
import type { SignInByXiaomiPayloadDto } from './SignInByXiaomiPayloadDto';
import type { SignInByYidunPayloadDto } from './SignInByYidunPayloadDto';

export type SigninByMobileDto = {
    /**
     * 外部身份源连接标志符
     */
    extIdpConnidentifier: string;
    /**
     * 移动端社会化登录类型：
     * - `apple`: Apple 移动端应用
     * - `wechat`: 微信移动应用
     * - `alipay`: 支付宝移动应用
     * - `wechatwork`: 企业微信移动应用
     * - `wechatwork_agency`: 企业微信移动应用（代开发模式）
     * - `lark_internal`: 飞书移动端企业自建应用
     * - `lark_public`: 飞书移动端应用商店应用
     * - `yidun`: 网易易盾一键登录
     * - `wechat_mini_program_code`: 微信小程序使用 code 登录
     * - `wechat_mini_program_phone `: 微信小程序使用手机号登录
     * - `wechat_mini_program_code_and_phone `: 微信小程序使用 code 和手机号登录
     * - `google`: Google 移动端社会化登录
     * - `facebook`: Facebook 移动端社会化登录
     * - `qq`: QQ 移动端社会化登录
     * - `weibo`: 新浪微博移动端社会化登录
     * - `baidu`: 百度移动端社会化登录
     * - `linkedin`: LinkedIn 移动端社会化登录
     * - `dingtalk`: 钉钉移动端社会化登录
     * - `github`: Github 动端社会化登录
     * - `gitee`: Gitee 移动端社会化登录
     * - `gitlab`: GitLab 移动端社会化登录
     * - `douyin`: 抖音移动端社会化登录
     * - `kuaishou`: 快手移动端社会化登录
     * - `xiaomi`: 小米移动端社会化登录
     * - `line`: LINE 移动端社会化登录
     * - `slack`: Slack 移动端社会化登录
     * - `oppo`: OPPO 移动端社会化登录
     * - `huawei`: 华为移动端社会化登录
     * - `amazon`: 亚马逊移动端社会化登录
     *
     */
    connection: SigninByMobileDto.connection;
    /**
     * 苹果移动端社会化登录数据，当 `connection` 为 `wechat` 的时候必填。
     */
    wechatPayload?: SignInByWechatPayloadDto;
    /**
     * 微信移动端社会化登录数据，当 `connection` 为 `apple` 的时候必填。
     */
    applePayload?: SignInByApplePayloadDto;
    /**
     * 支付宝移动端社会化登录数据，当 `connection` 为 `alipay` 的时候必填。
     */
    alipayPayload?: SignInByAlipayPayloadDto;
    /**
     * 企业微信移动端社会化登录数据，当 `connection` 为 `wechatwork` 的时候必填。
     */
    wechatworkPayload?: SignInByWechatworkDto;
    /**
     * 企业微信（代开发模式）移动端社会化登录数据，当 `connection` 为 `wechatwork_agency` 的时候必填。
     */
    wechatworkAgencyPayload?: SignInByWechatworkAgencyPayloadDto;
    /**
     * 飞书应用商店应用移动端社会化登录数据，当 `connection` 为 `lark_public` 的时候必填。
     */
    larkPublicPayload?: SignInByLarkPublicPayloadDto;
    /**
     * 飞书自建应用移动端社会化登录数据，当 `connection` 为 `lark_internal` 的时候必填。
     */
    larkInternalPayload?: SignInByLarkInternalPayloadDto;
    /**
     * 网易易盾移动端社会化登录数据，当 `connection` 为 `yidun` 的时候必填。
     */
    yidunPayload?: SignInByYidunPayloadDto;
    /**
     * 微信小程序使用 code 登录相关数据，当 `connection` 为 `wechat_mini_program_code` 的时候必填。
     */
    wechatMiniProgramCodePayload?: SignInByWechatMiniProgramCodePayloadDto;
    /**
     * 微信小程序使用手机号登录相关数据，当 `connection` 为 `wechat_mini_program_phone` 的时候必填。
     */
    wechatMiniProgramPhonePayload?: SignInByWechatMiniProgramPhonePayloadDto;
    /**
     * 微信小程序使用 code 和手机号登录相关数据，当 `connection` 为 `wechat_mini_program_code_and_phone` 的时候必填。
     */
    wechatMiniProgramCodeAndPhonePayload?: SignInByWechatMiniProgramCodeAndPhonePayloadDto;
    /**
     * Google 移动端社会化登录数据，当 `connection` 为 `google` 的时候必填。
     */
    googlePayload?: SignInByGooglePayloadDto;
    /**
     * Facebook 移动端社会化登录数据，当 `connection` 为 `facebook` 的时候必填。
     */
    facebookPayload?: SignInByFacebookPayloadDto;
    /**
     * QQ 移动端社会化登录数据，当 `connection` 为 `qq` 的时候必填。
     */
    qqPayload?: SignInByQQPayloadDto;
    /**
     * 新浪微博移动端社会化登录数据，当 `connection` 为 `weibo` 的时候必填。
     */
    weiboPayload?: SignInByWeiboPayloadDto;
    /**
     * 百度移动端社会化登录数据，当 `connection` 为 `baidu` 的时候必填，且 `baiduPayload` 的属性 `code` 和 `access_token` 必选其一，优先使用 `code` 值作为授权登录方式。
     */
    baiduPayload?: SignInByBaiduPayloadDto;
    /**
     * LinkedIn 移动端社会化登录数据，当 `connection` 为 `linkedin` 的时候必填。
     */
    linkedInPayload?: SignInByLinkedInPayloadDto;
    /**
     * 钉钉移动端社会化登录数据，当 `connection` 为 `dingtalk` 的时候必填。
     */
    dingTalkPayload?: SignInByDingTalkPayloadDto;
    /**
     * Github 移动端社会化登录数据，当 `connection` 为 `github` 的时候必填。
     */
    githubPayload?: SignInByGithubPayloadDto;
    /**
     * Gitee 移动端社会化登录数据，当 `connection` 为 `gitee` 的时候必填。
     */
    giteePayload?: SignInByGiteePayloadDto;
    /**
     * GitLab 移动端社会化登录数据，当 `connection` 为 `gitlab` 的时候必填。
     */
    gitlabPayload?: SignInByGitlabPayloadDto;
    /**
     * 抖音移动端社会化登录数据，当 `connection` 为 `douyin` 的时候必填。
     */
    douyinPayload?: SignInByDouyinPayloadDto;
    /**
     * 快手移动端社会化登录数据，当 `connection` 为 `kuaishou` 的时候必填。
     */
    kuaishouPayload?: SignInByKuaishouPayloadDto;
    /**
     * 小米移动端社会化登录数据，当 `connection` 为 `xiaomi` 的时候必填。
     */
    xiaomiPayload?: SignInByXiaomiPayloadDto;
    /**
     * LINE 移动端社会化登录数据，当 `connection` 为 `line` 的时候必填。
     */
    linePayload?: SignInByLinePayloadDto;
    /**
     * Slack 移动端社会化登录数据，当 `connection` 为 `slack` 的时候必填。
     */
    slackPayload?: SignInBySlackPayloadDto;
    /**
     * OPPO 移动端社会化登录数据，当 `connection` 为 `oppo` 的时候必填。
     */
    oppoPayload?: SignInByOPPOPayloadDto;
    /**
     * 华为移动端社会化登录数据，当 `connection` 为 `huawei` 的时候必填。
     */
    huaweiPayload?: SignInByHuaweiPayloadDto;
    /**
     * 亚马逊移动端社会化登录数据，当 `connection` 为 `amazon` 的时候必填。
     */
    amazonPayload?: SignInByAmazonPayloadDto;
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
     * - `apple`: Apple 移动端应用
     * - `wechat`: 微信移动应用
     * - `alipay`: 支付宝移动应用
     * - `wechatwork`: 企业微信移动应用
     * - `wechatwork_agency`: 企业微信移动应用（代开发模式）
     * - `lark_internal`: 飞书移动端企业自建应用
     * - `lark_public`: 飞书移动端应用商店应用
     * - `yidun`: 网易易盾一键登录
     * - `wechat_mini_program_code`: 微信小程序使用 code 登录
     * - `wechat_mini_program_phone `: 微信小程序使用手机号登录
     * - `wechat_mini_program_code_and_phone `: 微信小程序使用 code 和手机号登录
     * - `google`: Google 移动端社会化登录
     * - `facebook`: Facebook 移动端社会化登录
     * - `qq`: QQ 移动端社会化登录
     * - `weibo`: 新浪微博移动端社会化登录
     * - `baidu`: 百度移动端社会化登录
     * - `linkedin`: LinkedIn 移动端社会化登录
     * - `dingtalk`: 钉钉移动端社会化登录
     * - `github`: Github 动端社会化登录
     * - `gitee`: Gitee 移动端社会化登录
     * - `gitlab`: GitLab 移动端社会化登录
     * - `douyin`: 抖音移动端社会化登录
     * - `kuaishou`: 快手移动端社会化登录
     * - `xiaomi`: 小米移动端社会化登录
     * - `line`: LINE 移动端社会化登录
     * - `slack`: Slack 移动端社会化登录
     * - `oppo`: OPPO 移动端社会化登录
     * - `huawei`: 华为移动端社会化登录
     * - `amazon`: 亚马逊移动端社会化登录
     *
     */
    export enum connection {
        APPLE = 'apple',
        WECHAT = 'wechat',
        ALIPAY = 'alipay',
        WECHATWORK = 'wechatwork',
        WECHATWORK_AGENCY = 'wechatwork_agency',
        LARK_INTERNAL = 'lark_internal',
        LARK_PUBLIC = 'lark_public',
        YIDUN = 'yidun',
        WECHAT_MINI_PROGRAM_CODE = 'wechat_mini_program_code',
        WECHAT_MINI_PROGRAM_PHONE = 'wechat_mini_program_phone',
        WECHAT_MINI_PROGRAM_CODE_AND_PHONE = 'wechat_mini_program_code_and_phone',
        GOOGLE = 'google',
        FACEBOOK = 'facebook',
        QQ = 'qq',
        WEIBO = 'weibo',
        BAIDU = 'baidu',
        LINKEDIN = 'linkedin',
        DINGTALK = 'dingtalk',
        GITHUB = 'github',
        GITEE = 'gitee',
        GITLAB = 'gitlab',
        DOUYIN = 'douyin',
        KUAISHOU = 'kuaishou',
        XIAOMI = 'xiaomi',
        LINE = 'line',
        SLACK = 'slack',
        OPPO = 'oppo',
        HUAWEI = 'huawei',
        AMAZON = 'amazon',
    }


}

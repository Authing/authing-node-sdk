/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApplicationBrandingConfigInputDto = {
    /**
     * 是否开启自定义 CSS
     */
    customCSSEnabled?: boolean;
    /**
     * 自定义 CSS 内容
     */
    customCSS?: string;
    /**
     * Guard 版本：
     * - `Advanced`: 高级版
     * - `Classical`: 经典版
     *
     */
    guardVersion?: ApplicationBrandingConfigInputDto.guardVersion;
    /**
     * 自定义加载图标，当登录框加载时会展示
     */
    customLoadingImage?: string;
    /**
     * 自定义登录页背景，示例：
     * - 图片背景：`url(https://files.authing.co/user-contents/photos/6c6b3726-4a04-4ba7-b686-1a275f81a47a.png) center/cover`
     * - 纯色背景：`rgba(37,49,122,1)`
     *
     */
    customBackground?: string;
    /**
     * 是否显示切换语言按钮
     */
    showChangeLanguageButton?: boolean;
    /**
     * 展示的默认语言：
     * - `zh-CN`: 简体中文
     * - `zh-TW`: 繁体中文
     * - `en-US`: 英文
     * - `ja-JP`: 日语
     *
     * 默认情况下，Authing 登录页会根据用户浏览器语言自动渲染。
     *
     */
    defaultLanguage?: ApplicationBrandingConfigInputDto.defaultLanguage;
    /**
     * 是否显示忘记密码按钮
     */
    showForgetPasswordButton?: boolean;
    /**
     * 是否显示企业身份源登录方式
     */
    showEnterpriseConnections?: boolean;
    /**
     * 是否显示社会化登录方式
     */
    showSocialConnections?: boolean;
};

export namespace ApplicationBrandingConfigInputDto {

    /**
     * Guard 版本：
     * - `Advanced`: 高级版
     * - `Classical`: 经典版
     *
     */
    export enum guardVersion {
        ADVANCED = 'Advanced',
        CLASSICAL = 'Classical',
    }

    /**
     * 展示的默认语言：
     * - `zh-CN`: 简体中文
     * - `zh-TW`: 繁体中文
     * - `en-US`: 英文
     * - `ja-JP`: 日语
     *
     * 默认情况下，Authing 登录页会根据用户浏览器语言自动渲染。
     *
     */
    export enum defaultLanguage {
        ZH_CN = 'zh-CN',
        EN_US = 'en-US',
        ZH_TW = 'zh-TW',
        JA_JP = 'ja-JP',
    }


}

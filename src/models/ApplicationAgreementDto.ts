/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApplicationAgreementDto = {
    /**
     * 展示的页面（可多选）：
     * - `LoginPage`: 登录页面
     * - `RegisterPage`: 注册页面
     *
     */
    displayAt: Array<'LoginPage' | 'RegisterPage'>;
    /**
     * 是否要求必须勾选
     */
    isRequired: boolean;
    /**
     * 此协议针对什么语言有效:
     * - `zh-CN`: 简体中文
     * - `zh-TW`: 繁体中文
     * - `en-US`: 英文
     * - `ja-JP`: 日语
     *
     */
    lang: ApplicationAgreementDto.lang;
    /**
     * 此协议针对什么语言有效
     */
    content: string;
};

export namespace ApplicationAgreementDto {

    /**
     * 此协议针对什么语言有效:
     * - `zh-CN`: 简体中文
     * - `zh-TW`: 繁体中文
     * - `en-US`: 英文
     * - `ja-JP`: 日语
     *
     */
    export enum lang {
        ZH_CN = 'zh-CN',
        EN_US = 'en-US',
        ZH_TW = 'zh-TW',
        JA_JP = 'ja-JP',
    }


}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AppDto = {
    /**
     * App ID
     */
    appId: string;
    /**
     * App 名称
     */
    appName: string;
    /**
     * App Logo
     */
    appLogo: string;
    /**
     * App 登录地址
     */
    appLoginUrl: string;
    /**
     * App 默认的登录策略
     */
    appDefaultLoginStrategy: AppDto.appDefaultLoginStrategy;
};

export namespace AppDto {

    /**
     * App 默认的登录策略
     */
    export enum appDefaultLoginStrategy {
        ALLOW_ALL = 'ALLOW_ALL',
        DENY_ALL = 'DENY_ALL',
    }


}

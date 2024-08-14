/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApplicationSimpleInfoDto = {
    /**
     * 应用 ID
     */
    appId: string;
    /**
     * 应用唯一标志
     */
    appIdentifier: string;
    /**
     * 应用名称
     */
    appName: string;
    /**
     * 应用 Logo 链接
     */
    appLogo: string;
    /**
     * 应用描述信息
     */
    appDescription?: string;
    /**
     * 应用类型
     */
    appType: ApplicationSimpleInfoDto.appType;
    /**
     * 是否为集成应用
     */
    isIntegrateApp: boolean;
};

export namespace ApplicationSimpleInfoDto {

    /**
     * 应用类型
     */
    export enum appType {
        WEB = 'web',
        SPA = 'spa',
        NATIVE = 'native',
        API = 'api',
        MFA = 'mfa',
        MINI_PROGRAM = 'mini-program',
        GATEWAY_APP = 'gateway-app',
        GATEWAY_AGENT = 'gateway-agent',
    }


}

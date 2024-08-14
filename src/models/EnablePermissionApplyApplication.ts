/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EnablePermissionApplyApplication = {
    /**
     * 应用 ID
     */
    appId: string;
    /**
     * 应用名称
     */
    appName: string;
    /**
     * 应用 Logo 链接
     */
    logo: string;
    /**
     * 应用类型
     */
    appType: EnablePermissionApplyApplication.appType;
    /**
     * 集成应用的模版类型
     */
    template?: string;
};

export namespace EnablePermissionApplyApplication {

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

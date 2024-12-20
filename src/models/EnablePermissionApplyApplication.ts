/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EnablePermissionApplyApplication = {
    /**
     * Application ID
     */
    appId: string;
    /**
     * Application name
     */
    appName: string;
    /**
     *App Logo link
     */
    logo: string;
    /**
     *Application type
     */
    appType: EnablePermissionApplyApplication.appType;
    /**
     * Template types for integrated applications
     */
    template?: string;
};

export namespace EnablePermissionApplyApplication {

    /**
     *Application type
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

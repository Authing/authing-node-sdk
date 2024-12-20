/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListApplicationSubjectDataDto = {
    /**
     * Application ID
     */
    appId: string;
    /**
     * Application logo
     */
    logo: string;
    ext: string;
    template: string;
    /**
     * Application type: integrated application/self-built application
     */
    appType: ListApplicationSubjectDataDto.appType;
    /**
     * Allow/Deny
     */
    effect: ListApplicationSubjectDataDto.effect;
};

export namespace ListApplicationSubjectDataDto {

    /**
     * Application type: integrated application/self-built application
     */
    export enum appType {
        INTEGRATED = 'INTEGRATED',
        SELFBUILT = 'SELFBUILT',
        APP_PANEL = 'APP_PANEL',
    }

    /**
     * Allow/Deny
     */
    export enum effect {
        ALLOW = 'ALLOW',
        DENY = 'DENY',
    }


}

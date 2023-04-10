/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListApplicationSubjectDataDto = {
    /**
     * 应用 ID
     */
    appId: string;
    /**
     * 应用 logo
     */
    logo: string;
    ext: string;
    template: string;
    /**
     * 应用类型：集成应用/自建应用
     */
    appType: ListApplicationSubjectDataDto.appType;
    /**
     * 允许/拒绝
     */
    effect: ListApplicationSubjectDataDto.effect;
};

export namespace ListApplicationSubjectDataDto {

    /**
     * 应用类型：集成应用/自建应用
     */
    export enum appType {
        INTEGRATED = 'INTEGRATED',
        SELFBUILT = 'SELFBUILT',
    }

    /**
     * 允许/拒绝
     */
    export enum effect {
        ALLOW = 'ALLOW',
        DENY = 'DENY',
    }


}

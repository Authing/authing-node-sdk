/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetApplicationPermissionStrategyDataDto = {
    /**
     * 应用访问授权策略
     */
    permissionStrategy: GetApplicationPermissionStrategyDataDto.permissionStrategy;
};

export namespace GetApplicationPermissionStrategyDataDto {

    /**
     * 应用访问授权策略
     */
    export enum permissionStrategy {
        ALLOW_ALL = 'ALLOW_ALL',
        DENY_ALL = 'DENY_ALL',
    }


}

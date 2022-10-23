/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateApplicationPermissionStrategyDataDto = {
    /**
     * 应用访问授权策略
     */
    permissionStrategy: UpdateApplicationPermissionStrategyDataDto.permissionStrategy;
    /**
     * 应用 ID
     */
    appId: string;
};

export namespace UpdateApplicationPermissionStrategyDataDto {

    /**
     * 应用访问授权策略
     */
    export enum permissionStrategy {
        ALLOW_ALL = 'ALLOW_ALL',
        DENY_ALL = 'DENY_ALL',
    }


}

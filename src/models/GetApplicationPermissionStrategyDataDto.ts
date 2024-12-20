/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetApplicationPermissionStrategyDataDto = {
    /**
     * Apply access authorization policy
     */
    permissionStrategy: GetApplicationPermissionStrategyDataDto.permissionStrategy;
};

export namespace GetApplicationPermissionStrategyDataDto {

    /**
     * Apply access authorization policy
     */
    export enum permissionStrategy {
        ALLOW_ALL = 'ALLOW_ALL',
        DENY_ALL = 'DENY_ALL',
    }


}

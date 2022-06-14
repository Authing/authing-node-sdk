/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PolicyCondition } from './PolicyCondition';

export type AuthorizedResourceDto = {
    /**
     * 资源描述符
     */
    resourceCode: string;
    /**
     * 资源描述信息
     */
    description?: string;
    /**
     * 策略 Condition
     */
    condition?: Array<PolicyCondition>;
    /**
     * 资源类型
     */
    resourceType: AuthorizedResourceDto.resourceType;
    /**
     * API URL
     */
    apiIdentifier: string;
    /**
     * 授权的操作列表
     */
    actions: Array<string>;
    /**
     * 允许还是拒绝
     */
    effect: AuthorizedResourceDto.effect;
};

export namespace AuthorizedResourceDto {

    /**
     * 资源类型
     */
    export enum resourceType {
        DATA = 'DATA',
        API = 'API',
        MENU = 'MENU',
        BUTTON = 'BUTTON',
    }

    /**
     * 允许还是拒绝
     */
    export enum effect {
        ALLOW = 'ALLOW',
        DENY = 'DENY',
    }


}

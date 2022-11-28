/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IsActionAllowedDto = {
    /**
     * 资源标识符
     */
    resource: string;
    /**
     * 资源对应的操作
     */
    action: string;
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 所属权限分组(权限空间)的 Code
     */
    namespace?: string;
};

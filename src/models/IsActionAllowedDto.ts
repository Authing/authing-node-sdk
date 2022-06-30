/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IsActionAllowedDto = {
    /**
     * 资源对应的操作
     */
    action: string;
    /**
     * 资源标识符
     */
    resource: string;
    /**
     * 用户 ID
     */
    userId: string;
    /**
     * 所属权限分组的 code
     */
    namespace?: string;
};

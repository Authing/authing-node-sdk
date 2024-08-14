/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteResourceDto = {
    /**
     * 资源唯一标志符
     */
    code: string;
    /**
     * 所属权限分组(权限空间)的 Code，不传获取默认权限分组。
     */
    namespace?: string;
};

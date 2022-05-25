/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateExtIdpConnDto = {
    /**
     * 身份源连接自定义参数（增量修改）
     */
    fields: any;
    /**
     * 身份源连接显示名称
     */
    displayName: string;
    /**
     * 身份源连接 ID
     */
    id: string;
    /**
     * 身份源连接的图标
     */
    logo?: string;
    /**
     * 是否只支持登录
     */
    loginOnly?: boolean;
};

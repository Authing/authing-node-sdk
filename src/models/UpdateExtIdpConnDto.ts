/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateExtIdpConnDto = {
    /**
     * 是否只支持登录
     */
    loginOnly: boolean;
    /**
     * 关联模式
     */
    associationMode: string;
    /**
     * 图标
     */
    logo: string;
    /**
     * 身份源连接自定义参数
     */
    fields: any;
    /**
     * 身份源连接显示名称
     */
    displayName: string;
    /**
     * 连接 ID
     */
    id: string;
    /**
     * 绑定方式
     */
    challengeBindingMethods?: Array<'email-password' | 'username-password' | 'phone-password' | 'phone-code' | 'email-code'>;
};

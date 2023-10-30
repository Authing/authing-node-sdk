/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifyConfigDataDto = {
    /**
     * 主键 ID
     */
    id: string;
    /**
     * 应用 ID
     */
    appId: string;
    /**
     * 是否开启接管 Windows 登录
     */
    isWinLogin?: boolean;
    /**
     * 是否开启接管 Windows 更改密码
     */
    isWinChangePwd?: boolean;
    /**
     * 密钥
     */
    appSecret: string;
    /**
     * 固定值，public-key
     */
    publicKey: string;
    /**
     * 公钥地址
     */
    authAddress: string;
    /**
     * 应用图片
     */
    logo: string;
    /**
     * 应用图片
     */
    name: string;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignInByPasswordPayloadDto = {
    /**
     * 用户密码，默认不加密。Authing 所有 API 均通过 HTTPS 协议对密码进行安全传输，可以在一定程度上保证安全性。
     * 如果你还需要更高级别的安全性，我们还支持 `RSA256` 和国密 `SM2` 的密码加密方式。详情见可选参数 `options.passwordEncryptType`。
     *
     */
    password: string;
    /**
     * 用户账号（用户名/手机号/邮箱）
     */
    account?: string;
    /**
     * 邮箱，不区分大小写。
     */
    email?: string;
    /**
     * 用户名（username）
     */
    username?: string;
    /**
     * 手机号
     */
    phone?: string;
};

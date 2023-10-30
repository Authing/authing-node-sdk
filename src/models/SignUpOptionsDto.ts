/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignUpOptionsDto = {
    /**
     * 客户端 IP
     */
    clientIp?: string;
    /**
     * 用于注册时补全用户信息的短信验证码
     */
    phonePassCodeForInformationCompletion?: string;
    /**
     * 用于注册时验证用户的邮箱验证码
     */
    emailPassCodeForInformationCompletion?: string;
    /**
     * 登录/注册时传的额外参数，会存到用户自定义字段里面
     */
    context: any;
    /**
     * 密码加密类型，支持使用 RSA256 和国密 SM2 算法进行加密。默认为 `none` 不加密。
     * - `none`: 不对密码进行加密，使用明文进行传输。
     * - `rsa`: 使用 RSA256 算法对密码进行加密，需要使用 Authing 服务的 RSA 公钥进行加密，请阅读**介绍**部分了解如何获取 Authing 服务的 RSA256 公钥。
     * - `sm2`: 使用 [国密 SM2 算法](https://baike.baidu.com/item/SM2/15081831) 对密码进行加密，需要使用 Authing 服务的 SM2 公钥进行加密，请阅读**介绍**部分了解如何获取 Authing 服务的 SM2 公钥。
     *
     */
    passwordEncryptType?: SignUpOptionsDto.passwordEncryptType;
};

export namespace SignUpOptionsDto {

    /**
     * 密码加密类型，支持使用 RSA256 和国密 SM2 算法进行加密。默认为 `none` 不加密。
     * - `none`: 不对密码进行加密，使用明文进行传输。
     * - `rsa`: 使用 RSA256 算法对密码进行加密，需要使用 Authing 服务的 RSA 公钥进行加密，请阅读**介绍**部分了解如何获取 Authing 服务的 RSA256 公钥。
     * - `sm2`: 使用 [国密 SM2 算法](https://baike.baidu.com/item/SM2/15081831) 对密码进行加密，需要使用 Authing 服务的 SM2 公钥进行加密，请阅读**介绍**部分了解如何获取 Authing 服务的 SM2 公钥。
     *
     */
    export enum passwordEncryptType {
        SM2 = 'sm2',
        RSA = 'rsa',
        NONE = 'none',
    }


}

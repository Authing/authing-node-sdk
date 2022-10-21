/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdatePasswordDto = {
    /**
     * 新密码
     */
    newPassword: string;
    /**
     * 原始密码，如果用户当前设置了密码，此参数必填。
     */
    oldPassword?: string;
    /**
     * 密码加密类型，支持使用 RSA256 和国密 SM2 算法进行加密。默认为 `none` 不加密。
     * - `none`: 不对密码进行加密，使用明文进行传输。
     * - `rsa`: 使用 RSA256 算法对密码进行加密，需要使用 Authing 服务的 RSA 公钥进行加密，请阅读**介绍**部分了解如何获取 Authing 服务的 RSA256 公钥。
     * - `sm2`: 使用 [国密 SM2 算法](https://baike.baidu.com/item/SM2/15081831) 对密码进行加密，需要使用 Authing 服务的 SM2 公钥进行加密，请阅读**介绍**部分了解如何获取 Authing 服务的 SM2 公钥。
     *
     */
    passwordEncryptType?: UpdatePasswordDto.passwordEncryptType;
};

export namespace UpdatePasswordDto {

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

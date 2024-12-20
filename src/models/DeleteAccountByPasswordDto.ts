/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteAccountByPasswordDto = {
    /**
     * User password
     */
    password: string;
    /**
     * Password encryption type, supports encryption using RSA256 and national secret SM2 algorithms. Default is `none` to not encrypt.
     * - `none`: Do not encrypt the password and use clear text for transmission.
     * - `rsa`: Use the RSA256 algorithm to encrypt the password. You need to use the RSA public key of the Authing service for encryption. Please read the **Introduction** section to learn how to obtain the RSA256 public key of the Authing service.
     * - `sm2`: Use [National Secret SM2 Algorithm](https://baike.baidu.com/item/SM2/15081831) to encrypt the password. You need to use the SM2 public key of the Authing service for encryption, please read** Learn how to obtain the SM2 public key of the Authing service in the introduction** section.
     *
     */
    passwordEncryptType?: DeleteAccountByPasswordDto.passwordEncryptType;
};

export namespace DeleteAccountByPasswordDto {

    /**
     * Password encryption type, supports encryption using RSA256 and national secret SM2 algorithms. Default is `none` to not encrypt.
     * - `none`: Do not encrypt the password and use clear text for transmission.
     * - `rsa`: Use the RSA256 algorithm to encrypt the password. You need to use the RSA public key of the Authing service for encryption. Please read the **Introduction** section to learn how to obtain the RSA256 public key of the Authing service.
     * - `sm2`: Use [National Secret SM2 Algorithm](https://baike.baidu.com/item/SM2/15081831) to encrypt the password. You need to use the SM2 public key of the Authing service for encryption, please read** Learn how to obtain the SM2 public key of the Authing service in the introduction** section.
     *
     */
    export enum passwordEncryptType {
        SM2 = 'sm2',
        RSA = 'rsa',
        NONE = 'none',
    }


}

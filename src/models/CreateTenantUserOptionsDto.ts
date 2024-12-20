/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTenantUserOptionsDto = {
    /**
     * This parameter is generally set when migrating old user data to Authing. When this switch is turned on, the password field will be written directly to the Authing database, and Authing will not encrypt this field again. If your passwords are not stored in clear text, you should keep it enabled and write cryptographic function calculations.
     */
    keepPassword?: boolean;
    /**
     * Whether to automatically generate a password
     */
    autoGeneratePassword?: boolean;
    /**
     * Whether to force users to reset their password the first time
     */
    resetPasswordOnFirstLogin?: boolean;
    /**
     * Password encryption type, supports encryption using RSA256 and national secret SM2 algorithms. Default is `none` to not encrypt.
     * - `none`: Do not encrypt the password and use clear text for transmission.
     * - `rsa`: Use the RSA256 algorithm to encrypt the password. You need to use the RSA public key of the Authing service for encryption. Please read the **Introduction** section to learn how to obtain the RSA256 public key of the Authing service.
     * - `sm2`: Use [National Secret SM2 Algorithm](https://baike.baidu.com/item/SM2/15081831) to encrypt the password. You need to use the SM2 public key of the Authing service for encryption, please read** Learn how to obtain the SM2 public key of the Authing service in the introduction** section.
     *
     */
    passwordEncryptType?: CreateTenantUserOptionsDto.passwordEncryptType;
};

export namespace CreateTenantUserOptionsDto {

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

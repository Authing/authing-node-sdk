/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SendCreateAccountNotificationDto } from './SendCreateAccountNotificationDto';

export type CreateUserOptionsDto = {
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
     * The type of parent department ID used in this call
     */
    departmentIdType?: CreateUserOptionsDto.departmentIdType;
    /**
     * Options for resetting password, sending email and mobile phone number
     */
    sendNotification?: SendCreateAccountNotificationDto;
    /**
     * Password encryption type, supports encryption using RSA256 and national secret SM2 algorithms. Default is `none` to not encrypt.
     * - `none`: Do not encrypt the password and use clear text for transmission.
     * - `rsa`: Use the RSA256 algorithm to encrypt the password. You need to use the RSA public key of the Authing service for encryption. Please read the **Introduction** section to learn how to obtain the RSA256 public key of the Authing service.
     * - `sm2`: Use [National Secret SM2 Algorithm](https://baike.baidu.com/item/SM2/15081831) to encrypt the password. You need to use the SM2 public key of the Authing service for encryption, please read** Learn how to obtain the SM2 public key of the Authing service in the introduction** section.
     *
     */
    passwordEncryptType?: CreateUserOptionsDto.passwordEncryptType;
};

export namespace CreateUserOptionsDto {

    /**
     * The type of parent department ID used in this call
     */
    export enum departmentIdType {
        DEPARTMENT_ID = 'department_id',
        OPEN_DEPARTMENT_ID = 'open_department_id',
        SYNC_RELATION = 'sync_relation',
        CUSTOM_FIELD = 'custom_field',
        CODE = 'code',
    }

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

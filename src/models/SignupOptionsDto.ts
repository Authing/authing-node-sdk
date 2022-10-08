/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignupOptionsDto = {
    /**
     * 客户端 IP
     */
    clientIp?: string;
    /**
     * 用于注册时补全用户信息的短信验证码
     */
    phonePassCodeForInformationCompletion?: string;
    /**
     * 用于注册时补全用户信息的短信验证码
     */
    emailPassCodeForInformationCompletion?: string;
    /**
     * 登录/注册时传的额外参数，会存到用户自定义字段里面
     */
    context: any;
    /**
     * 密码加密类型，支持 sm2 和 rsa。默认可以不加密。
     */
    passwordEncryptType?: SignupOptionsDto.passwordEncryptType;
};

export namespace SignupOptionsDto {

    /**
     * 密码加密类型，支持 sm2 和 rsa。默认可以不加密。
     */
    export enum passwordEncryptType {
        SM2 = 'sm2',
        RSA = 'rsa',
        NONE = 'none',
    }


}

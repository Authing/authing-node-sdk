/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserInfoDto = {
    /**
     * 用户名，用户池内唯一
     */
    username?: string;
    /**
     * 邮箱，不区分大小写
     */
    email?: string;
    /**
     * 手机号，不带区号。如果是国外手机号，请在 phoneCountryCode 参数中指定区号。
     */
    phone?: string;
    /**
     * 手机区号，中国大陆手机号可不填。Authing 短信服务暂不内置支持国际手机号，你需要在 Authing 控制台配置对应的国际短信服务。完整的手机区号列表可参阅 https://en.wikipedia.org/wiki/List_of_country_calling_codes。
     */
    phoneCountryCode?: string;
    /**
     * 用户真实名称，不具备唯一性
     */
    name?: string;
    /**
     * 性别
     */
    gender?: UserInfoDto.gender;
    /**
     * 所在国家
     */
    country?: string;
    /**
     * 所在省份
     */
    province?: string;
    /**
     * 所在城市
     */
    city?: string;
};

export namespace UserInfoDto {

    /**
     * 性别
     */
    export enum gender {
        M = 'M',
        F = 'F',
        U = 'U',
    }


}

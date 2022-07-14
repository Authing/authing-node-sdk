/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SetUserDepartmentsOptionsDto = {
    /**
     * 用户 ID 类型，可以指定为用户 ID、手机号、邮箱、用户名和 externalId。
     */
    userIdType?: SetUserDepartmentsOptionsDto.userIdType;
};

export namespace SetUserDepartmentsOptionsDto {

    /**
     * 用户 ID 类型，可以指定为用户 ID、手机号、邮箱、用户名和 externalId。
     */
    export enum userIdType {
        USER_ID = 'user_id',
        EXTERNAL_ID = 'external_id',
        PHONE = 'phone',
        EMAIL = 'email',
        USERNAME = 'username',
    }


}

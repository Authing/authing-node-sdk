/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetUserDefinedFieldsDto = {
    /**
     * 主体类型，目前支持用户和角色
     */
    targetType: GetUserDefinedFieldsDto.targetType;
};

export namespace GetUserDefinedFieldsDto {

    /**
     * 主体类型，目前支持用户和角色
     */
    export enum targetType {
        USER = 'USER',
        ROLE = 'ROLE',
    }


}

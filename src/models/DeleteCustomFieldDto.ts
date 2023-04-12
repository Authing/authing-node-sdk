/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteCustomFieldDto = {
    /**
     * 主体类型，目前支持用户、角色、分组和部门
     */
    targetType: DeleteCustomFieldDto.targetType;
    /**
     * 字段 key，不能和内置字段的 key 冲突，**设置之后将不能进行修改**。
     */
    key: string;
};

export namespace DeleteCustomFieldDto {

    /**
     * 主体类型，目前支持用户、角色、分组和部门
     */
    export enum targetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        DEPARTMENT = 'DEPARTMENT',
    }


}

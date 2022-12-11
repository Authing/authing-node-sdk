/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SubjectDto = {
    /**
     * 主体 ID ，包含用户 ID、用户组 ID、角色 ID、组织机构 ID
     */
    id: string;
    /**
     * 主体类型,包括 USER、GROUP、ROLE、ORG 四种类型
     */
    type: SubjectDto.type;
    /**
     * 主体名称，包含用户名称、用户组名称、角色名称、组织机构名称
     */
    name?: string;
};

export namespace SubjectDto {

    /**
     * 主体类型,包括 USER、GROUP、ROLE、ORG 四种类型
     */
    export enum type {
        USER = 'USER',
        ORG = 'ORG',
        GROUP = 'GROUP',
        ROLE = 'ROLE',
    }


}

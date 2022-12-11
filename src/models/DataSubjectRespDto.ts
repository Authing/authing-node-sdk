/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DataSubjectRespDto = {
    /**
     * 主体 ID ，包含用户 ID、用户组 ID、角色 ID、组织机构 ID
     */
    targetIdentifier: string;
    /**
     * 主体类型,包括 USER、GROUP、ROLE、ORG 四种类型
     */
    targetType: DataSubjectRespDto.targetType;
    /**
     * 主体名称，包含用户名称、用户组名称、角色名称、组织机构名称
     */
    targetName: string;
    /**
     * 主体对象被授权时间
     */
    authorizationTime: string;
};

export namespace DataSubjectRespDto {

    /**
     * 主体类型,包括 USER、GROUP、ROLE、ORG 四种类型
     */
    export enum targetType {
        USER = 'USER',
        ORG = 'ORG',
        GROUP = 'GROUP',
        ROLE = 'ROLE',
    }


}

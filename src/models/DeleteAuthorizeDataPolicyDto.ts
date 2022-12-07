/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteAuthorizeDataPolicyDto = {
    /**
     * 主体类型,包括 USER、GROUP、ROLE、ORG 四种类型
     */
    targetType: DeleteAuthorizeDataPolicyDto.targetType;
    /**
     * 主体 ID ，包含用户 ID、用户组 ID、角色 ID、组织机构 ID
     */
    targetIdentifier: string;
    /**
     * 数据策略 ID
     */
    policyId: string;
};

export namespace DeleteAuthorizeDataPolicyDto {

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

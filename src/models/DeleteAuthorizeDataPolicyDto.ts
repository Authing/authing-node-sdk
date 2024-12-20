/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteAuthorizeDataPolicyDto = {
    /**
     * Subject type, including four types: USER, GROUP, ROLE, and ORG
     */
    targetType: DeleteAuthorizeDataPolicyDto.targetType;
    /**
     * Subject ID, including user ID, user group ID, role ID, organization ID
     */
    targetIdentifier: string;
    /**
     * Data policy ID
     */
    policyId: string;
};

export namespace DeleteAuthorizeDataPolicyDto {

    /**
     * Subject type, including four types: USER, GROUP, ROLE, and ORG
     */
    export enum targetType {
        USER = 'USER',
        ORG = 'ORG',
        GROUP = 'GROUP',
        ROLE = 'ROLE',
    }


}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DataSubjectRespDto = {
    /**
     * Subject ID, including user ID, user group ID, role ID, organization ID
     */
    targetIdentifier: string;
    /**
     * Subject type, including four types: USER, GROUP, ROLE, and ORG
     */
    targetType: DataSubjectRespDto.targetType;
    /**
     * Subject name, including user name, user group name, role name, organization name
     */
    targetName: string;
    /**
     * The time when the subject object is authorized
     */
    authorizationTime: string;
};

export namespace DataSubjectRespDto {

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

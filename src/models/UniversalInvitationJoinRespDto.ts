/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UniversalInvitationJoinRespDto = {
    /**
     * 申请结果:
     * -`PENDING`: 待审批
     * -`PASSED`: 已通过
     */
    status: UniversalInvitationJoinRespDto.status;
};

export namespace UniversalInvitationJoinRespDto {

    /**
     * 申请结果:
     * -`PENDING`: 待审批
     * -`PASSED`: 已通过
     */
    export enum status {
        PENDING = 'PENDING',
        PASSED = 'PASSED',
    }


}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ReviewTenantEnterpriseCertificationBodyDto = {
    /**
     * 租户 id
     */
    tenantId: string;
    /**
     * 审核结果
     */
    enterpriseCertificationStatus: ReviewTenantEnterpriseCertificationBodyDto.enterpriseCertificationStatus;
    /**
     * 审核原因
     */
    reviewReason: string;
};

export namespace ReviewTenantEnterpriseCertificationBodyDto {

    /**
     * 审核结果
     */
    export enum enterpriseCertificationStatus {
        NOT_SUBMIT = 'not_submit',
        REVIEWING = 'reviewing',
        PASS = 'pass',
        '_-1' = -1,
    }


}

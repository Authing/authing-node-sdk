/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TenantEnterpriseCertificationRespDto = {
    /**
     * 企业名称
     */
    businessName?: string;
    /**
     * 营业执照
     */
    businessLicense?: string;
    /**
     * 更新时间
     */
    updatedAt?: string;
    /**
     * 工商登记名称
     */
    businessRegistrationName?: string;
    /**
     * 统一社会信用代码
     */
    unifiedSocialCredit?: string;
    /**
     * 法定代表人姓名
     */
    legalRepresentativeName?: string;
    /**
     * 身份证号
     */
    nationalIdentificationNumber?: string;
    /**
     * 个人银行卡号
     */
    personalBankCardNumber?: string;
    /**
     * 银行预留手机号
     */
    bankReservedPhone?: string;
    /**
     * 审核原因
     */
    reviewReason?: string;
    /**
     * 企业认证状态
     */
    enterpriseCertificationStatus?: TenantEnterpriseCertificationRespDto.enterpriseCertificationStatus;
};

export namespace TenantEnterpriseCertificationRespDto {

    /**
     * 企业认证状态
     */
    export enum enterpriseCertificationStatus {
        NOT_SUBMIT = 'not_submit',
        REVIEWING = 'reviewing',
        PASS = 'pass',
        '_-1' = -1,
    }


}

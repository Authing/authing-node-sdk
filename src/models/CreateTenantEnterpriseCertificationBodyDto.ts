/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTenantEnterpriseCertificationBodyDto = {
    /**
     *Company name
     */
    businessName: string;
    /**
     *Business license
     */
    businessLicense: string;
    /**
     * Industrial and commercial registration name
     */
    businessRegistrationName: string;
    /**
     * Unified social credit code
     */
    unifiedSocialCredit: string;
    /**
     * Name of legal representative
     */
    legalRepresentativeName: string;
    /**
     * ID number
     */
    nationalIdentificationNumber: string;
    /**
     *Personal bank card number
     */
    personalBankCardNumber: string;
    /**
     * Mobile phone number reserved by the bank
     */
    bankReservedPhone: string;
    /**
     * Tenant ID
     */
    tenantId: string;
};

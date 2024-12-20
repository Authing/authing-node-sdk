/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DecryptDouyinMiniProgramPhoneDataDto = {
    /**
     * The mobile phone number bound by the user (foreign mobile phone numbers will have area codes)
     */
    phoneNumber: string;
    /**
     *Mobile phone number without area code
     */
    purePhoneNumber: string;
    /**
     *Area code
     */
    countryCode: string;
};

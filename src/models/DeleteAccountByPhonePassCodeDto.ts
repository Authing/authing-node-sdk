/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DeleteAccountByPhonePassCodeDto = {
    /**
     * The phone number associated with this account, without the area code. If it is a foreign phone number, specify the area code in the phoneCountryCode parameter.
     */
    phoneNumber: string;
  /**
   * SMS verification code. A SMS verification code can only be used once and is valid for one minute. You need to obtain it through the **Send SMS** interface.
   */
    passCode: string;
    /**
     * Phone Country Code
     */
    phoneCountryCode?: string;
};

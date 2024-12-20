/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateRosterUserInfoDto = {
    /**
     * List ID
     */
    rosterId: string;
    /**
     * Name of invitee
     */
    name: string;
    /**
     * Email address of the invitee, not case sensitive
     */
    email: string;
    /**
     *International area code of the invitee’s mobile phone number
     */
    phoneCountryCode?: string;
    /**
     * Invitee’s mobile phone number
     */
    phone?: string;
};

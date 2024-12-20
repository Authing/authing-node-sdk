/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExtendsFieldDto } from './ExtendsFieldDto';

export type InviteeContextDto = {
    /**
     * Whether to enable identity verification code
     */
    enabledIdentifierVerify: boolean;
    /**
     * How to send authentication code
     * - `priorityEmail`: priority email
     * - `prioritySMS`: Priority SMS
     */
    sendVerifyCodeMethod: InviteeContextDto.sendVerifyCodeMethod;
    /**
     * Whether to enable information completion
     */
    enabledInfoFill: boolean;
    /**
     * Information completion page prompts
     */
    registerInfoFillMsg?: string;
    /**
     * Registration information completion field list configuration
     */
    extendsFields: Array<ExtendsFieldDto>;
    /**
     * i18n object of information completion field
     */
    extendsFieldsI18n: any;
    /**
     * Other information for information completion fields
     */
    extendsFieldsOptions: Array<any>;
    /**
     * Invitee's email address
     */
    email: string;
    /**
     * Invitee’s mobile phone number
     */
    phone?: string;
    /**
     *Mobile phone number international area code
     */
    phoneCountryCode?: string;
    /**
     * Name of invitee
     */
    inviteeName?: string;
    /**
     *Maximum number of incorrect verification code inputs
     */
    verifyCodeMaxErrCount: number;
};

export namespace InviteeContextDto {

    /**
     * How to send authentication code
     * - `priorityEmail`: priority email
     * - `prioritySMS`: Priority SMS
     */
    export enum sendVerifyCodeMethod {
        PRIORITY_SMS = 'prioritySMS',
        PRIORITY_EMAIL = 'priorityEmail',
    }


}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * According to the order of push code usage, there are five states: pushed, waiting for user consent/cancel authorization, push code expired, and unknown error. The front end should give users different feedback through different states.
 */
export type CheckPushcodeStatusDto = {
    /**
     * Push code (unique ID for push login)
     */
    pushCodeId?: any;
};

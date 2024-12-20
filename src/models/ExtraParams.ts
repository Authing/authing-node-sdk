/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExtraParams = {
    /**
     * Role subject expiration time in milliseconds, permanently valid when null
     */
    endTime?: number;
    /**
     * The millisecond value of the role subject's joining time. If it is null, it will join immediately.
     */
    enableTime?: number;
};

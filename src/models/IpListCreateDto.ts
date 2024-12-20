/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IpListCreateDto = {
    /**
     *Add time
     */
    expireAt: string;
    /**
     * Restriction type, FORBID_LOGIN - prohibit login, FORBID_REGISTER - prohibit registration, SKIP_MFA - skip MFA
     */
    limitList: Array<string>;
    /**
     * Deletion type, MANUAL-manual, SCHEDULE-strategic deletion
     */
    removeType: string;
    /**
     * Add type, MANUAL-manual, SCHEDULE-strategy addition
     */
    addType: string;
    /**
     * ip type, WHITE-whitelist, BLACK-blacklist
     */
    ipType: string;
    /**
     * ip, multiple IPs separated by commas
     */
    ips: string;
};

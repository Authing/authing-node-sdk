/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type IpListRespDto = {
    /**
     *ID
     */
    id: string;
    /**
     *ip
     */
    ip: string;
    /**
     * ip type, WHITE-whitelist, BLACK-blacklist
     */
    ipType: string;
    /**
     * Add type, MANUAL-manual, SCHEDULE-strategy addition
     */
    addType: string;
    /**
     * Deletion type, MANUAL-manual, SCHEDULE-strategic deletion
     */
    removeType: string;
    /**
     * Restriction type, FORBID_LOGIN - prohibit login, FORBID_REGISTER - prohibit registration, SKIP_MFA - skip MFA
     */
    limitList: Array<string>;
};

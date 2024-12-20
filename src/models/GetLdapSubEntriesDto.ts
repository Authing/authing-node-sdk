/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * LDAP server queries the next level based on DN
 */
export type GetLdapSubEntriesDto = {
    /**
     * Current page, starting from 1
     */
    page?: any;
    /**
     *Number of items per page
     */
    limit?: any;
    /**
     * Current DN
     */
    dn?: any;
};

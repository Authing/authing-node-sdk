/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * LDAP server 根据 DN 查询下一级
 */
export type GetLdapSubEntriesDto = {
    /**
     * 当前页,从 1 开始
     */
    page?: any;
    /**
     * 每页条数
     */
    limit?: any;
    /**
     * 当前 DN
     */
    dn?: any;
};

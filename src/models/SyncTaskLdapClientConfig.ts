/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SyncTaskLdapClientConfig = {
    /**
     * LDAP 链接
     */
    url: string;
    /**
     * Bind DN
     */
    bindDn: string;
    /**
     * Bind DN 密码
     */
    bindCredentials: string;
    /**
     * Users Base DN
     */
    usersBaseDn: string;
    /**
     * Groups Base Dn
     */
    groupsBaseDn: string;
    /**
     * 用户查询条件
     */
    userQueryCriteria: string;
    /**
     * 部门查询条件
     */
    departmentQueryCriteria: string;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LdapConfigInfoDto = {
    /**
     *ID
     */
    id?: string;
    /**
     * Whether the LDAP service is enabled 1 Yes, 2 No
     */
    enabled: number;
    /**
     * User pool ID
     */
    userPoolId: string;
    /**
     * LDAP host
     */
    linkUrl: string;
    /**
     *LDAPS host
     */
    ldapsLinkUrl: string;
    /**
     * Whether it is a private LDAP Server 1 Yes, 2 No
     */
    enablePrivatization: number;
    /**
     * bindDN generated based on domain
     */
    bindDn: string;
    /**
     * LDAP domain name, used to generate baseDN
     */
    ldapDomain: string;
    /**
     * Whether to enable SSL during privatization 1 Yes, 2 No
     */
    enableSsl?: number;
    /**
     * dc=ibm,dc=com,o=authing
     */
    baseDn: string;
    /**
     * Encrypted stored bindDn password (16 bits)
     */
    bindPwd: string;
    /**
     * The visible range of the organization, the value is the organization node ID, separated by commas
     */
    visibleOrgNodes: any;
    /**
     * Visible range of user basic fields
     */
    visibleFields: any;
    /**
     * The LDAP field to which the user extended field is mapped, stored as a JSON string
     */
    udfMapping: any;
};

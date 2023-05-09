/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LdapConfigInfoDto = {
    /**
     * ID
     */
    id?: string;
    /**
     * LDAP 服务是否开启1 是、2 否
     */
    enabled: number;
    /**
     * 用户池 ID
     */
    userPoolId: string;
    /**
     * LDAP host
     */
    linkUrl: string;
    /**
     * LDAPS host
     */
    ldapsLinkUrl: string;
    /**
     * 是否是私有化的 LDAP Server 1 是、2 否
     */
    enablePrivatization: number;
    /**
     * 根据 domain 生成的 bindDN
     */
    bindDn: string;
    /**
     * LDAP 域名，用于生成 baseDN
     */
    ldapDomain: string;
    /**
     * 私有化时是否开启 SSL 1 是、2 否
     */
    enableSsl?: number;
    /**
     * dc=ibm,dc=com,o=authing
     */
    baseDn: string;
    /**
     * 加密存储的 bindDn 密码(16位)
     */
    bindPwd: string;
    /**
     * 组织机构可见范围，值为组织节点 ID，用逗号分隔
     */
    visibleOrgNodes: any;
    /**
     * 用户基础字段可见范围
     */
    visibleFields: any;
    /**
     * 用户拓展字段映射到的 LDAP 字段，存储为 JSON 字符串
     */
    udfMapping: any;
};

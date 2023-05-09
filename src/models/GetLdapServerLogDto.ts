/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * LDAP server 日志查询
 */
export type GetLdapServerLogDto = {
    /**
     * 类型：1 访问日志，2 错误日志
     */
    type?: any;
    /**
     * 当前页,从 1 开始
     */
    page?: any;
    /**
     * 每页条数
     */
    limit?: any;
    /**
     * 连接标识
     */
    connection?: any;
    /**
     * 操作码
     */
    operationNumber?: any;
    /**
     * 错误码
     */
    errorCode?: any;
    /**
     * 消息内容
     */
    message?: any;
    /**
     * 开始时间-时间戳
     */
    startTime?: any;
    /**
     * 结束时间-时间戳
     */
    endTime?: any;
};

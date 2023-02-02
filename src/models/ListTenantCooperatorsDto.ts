/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 根据用户池 ID 获取某个用户池内拥有协作管理员能力的用户列表
 */
export type ListTenantCooperatorsDto = {
    /**
     * 搜索关键字
     */
    keywords?: any;
    /**
     * 是否外部
     */
    external?: any;
    /**
     * 页码
     */
    page?: any;
    /**
     * 每页获取的数据量
     */
    limit?: any;
};

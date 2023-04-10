/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取应用列表
 */
export type ListApplicationsDto = {
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
    /**
     * 是否为集成应用
     */
    isIntegrateApp?: any;
    /**
     * 是否为自建应用
     */
    isSelfBuiltApp?: any;
    /**
     * 是否开启单点登录
     */
    ssoEnabled?: any;
    /**
     * 模糊搜索字符串
     */
    keywords?: any;
    /**
     * 搜索应用，true：搜索所有应用, 默认为 false
     */
    all?: any;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取应用简单信息列表
 */
export type ListApplicationSimpleInfoDto = {
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
    keyword?: any;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 此端点用户获取用户资料，需要在请求头中带上用户的 `access_token`，Authing 服务器会根据用户 `access_token` 中的 `scope` 返回对应的字段。
 */
export type GetProfileDto = {
    /**
     * 是否获取自定义数据
     */
    withCustomData?: any;
    /**
     * 是否获取 identities
     */
    withIdentities?: any;
    /**
     * 是否获取部门 ID 列表
     */
    withDepartmentIds?: any;
};

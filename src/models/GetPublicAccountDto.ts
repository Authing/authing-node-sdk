/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 通过公共账号用户 ID，获取公共账号详情，可以选择获取自定义数据、选择指定用户 ID 类型等。
 */
export type GetPublicAccountDto = {
    /**
     * 公共账号用户 ID
     */
    userId?: any;
    /**
     * 用户 ID 类型，默认值为 `user_id`，可选值为：
     * - `user_id`: Authing 用户 ID，如 `6319a1504f3xxxxf214dd5b7`
     * - `phone`: 用户手机号
     * - `email`: 用户邮箱
     * - `username`: 用户名
     * - `external_id`: 用户在外部系统的 ID，对应 Authing 用户信息的 `externalId` 字段
     *
     */
    userIdType?: any;
    /**
     * 是否获取自定义数据
     */
    withCustomData?: any;
    /**
     * 是否获取部门 ID 列表
     */
    withDepartmentIds?: any;
};

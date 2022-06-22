/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 获取用户列表接口，支持分页
 */
export type ListUsersDto = {
    /**
     * 当前页数，从 1 开始
     */
    page?: any;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: any;
    /**
     * 账户当前状态
     */
    status?: any;
    /**
     * 用户创建、修改开始时间，为精确到秒的 UNIX 时间戳；支持获取从某一段时间之后的增量数据。
     */
    updatedAtStart?: any;
    /**
     * 用户创建、修改终止时间，为精确到秒的 UNIX 时间戳；支持获取某一段时间内的增量数据。默认为当前时间。
     */
    updatedAtEnd?: any;
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

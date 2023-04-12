/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 通过筛选条件，获取用户、分组、角色、组织机构的自定义字段值。
 */
export type GetCustomDataDto = {
    /**
     * 租户 ID
     */
    tenantId?: any;
    /**
     * 目标对象类型：
     * - `USER`: 用户
     * - `ROLE`: 角色
     * - `GROUP`: 分组
     * - `DEPARTMENT`: 部门
     *
     */
    targetType?: any;
    /**
     * 目标对象的唯一标志符：
     * - 如果是用户，为用户的 ID，如 `6343b98b7cfxxx9366e9b7c`
     * - 如果是角色，为角色的 code，如 `admin`
     * - 如果是分组，为分组的 code，如 `developer`
     * - 如果是部门，为部门的 ID，如 `6343bafc019xxxx889206c4c`
     *
     */
    targetIdentifier?: any;
    /**
     * 所属权限分组的 code，当 targetType 为角色的时候需要填写，否则可以忽略
     */
    namespace?: any;
};

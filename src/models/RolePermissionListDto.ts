/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RolePermissionListDto = {
    /**
     * 角色 ID
     */
    roleId: string;
    /**
     * 主体状态，DISABLE-未加入角色，ENABLE-已经加入了角色
     */
    status: string;
    /**
     * 主体加入时间毫秒值
     */
    enableTime?: number;
    /**
     * 主体失效时间毫秒值，为 null 表示用不失效
     */
    endTime?: number;
    /**
     * 所属用户池 ID
     */
    userPoolId: string;
    /**
     * 角色名称，最多 50 字符
     */
    roleName: string;
    /**
     * 角色 code,只能使用字母、数字和 -_，最多 50 字符
     */
    roleCode: string;
    /**
     * 角色描述信息,最多两百字符
     */
    description?: string;
    /**
     * 创建时间
     */
    createdAt: string;
    /**
     * 更新时间
     */
    updatedAt: string;
};

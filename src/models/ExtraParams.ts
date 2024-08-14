/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExtraParams = {
    /**
     * 角色主体过期时间毫秒值, 为 null 时永久有效
     */
    endTime?: number;
    /**
     * 角色主体加入时间毫秒值, 为 null 时立即加入
     */
    enableTime?: number;
};

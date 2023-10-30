/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateGroupReqDto = {
    /**
     * 分组描述
     */
    description: string;
    /**
     * 分组 code
     */
    code: string;
    /**
     * 分组名称
     */
    name?: string;
    /**
     * 分组新的 code
     */
    newCode?: string;
    /**
     * 自定义数据，传入的对象中的 key 必须先在用户池定义相关自定义字段
     */
    customData?: any;
};

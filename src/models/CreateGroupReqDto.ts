/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateGroupReqDto = {
    /**
     * 分组类型
     */
    type: string;
    /**
     * 分组描述
     */
    description: string;
    /**
     * 分组名称
     */
    name: string;
    /**
     * 分组 code
     */
    code: string;
    /**
     * 自定义数据，传入的对象中的 key 必须先在用户池定义相关自定义字段
     */
    customData?: any;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OperateModelDto = {
    /**
     * 操作 id
     */
    id: string;
    /**
     * 用户池 id
     */
    userPoolId: string;
    /**
     * 功能 id
     */
    modelId: string;
    /**
     * 操作名称
     */
    operateName: string;
    /**
     * 操作方法 key
     */
    operateKey: string;
    /**
     * 是否展示:
     * - true: 展示
     * - false: 不展示
     *
     */
    show: boolean;
    /**
     * 是否为默认操作:
     * - true 是默认操作
     * - fasle 不是默认操作
     *
     */
    isDefault: boolean;
    /**
     * 创建时间
     */
    createdAt: string;
    /**
     * 更新时间
     */
    updatedAt: string;
};

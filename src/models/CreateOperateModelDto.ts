/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateOperateModelDto = {
    /**
     * 是否展示:
     * - true: 展示
     * - true: 不展示
     *
     */
    show: boolean;
    /**
     * 图标
     */
    icon: string;
    /**
     * 操作配置
     */
    config: any;
    /**
     * 操作名称
     */
    operateName: string;
    /**
     * 操作类型:
     * - openPage: 打开一个网页
     *
     */
    operateKey: string;
    /**
     * modelId
     */
    modelId: string;
};

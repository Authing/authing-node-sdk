/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateOperateModelDto = {
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
     * 操作 Key 值
     */
    operateKey: string;
    /**
     * 是否展示:
     * - true: 展示
     * - true: 不展示
     *
     */
    show: boolean;
    /**
     * modelId
     */
    modelId: string;
    /**
     * id
     */
    id: string;
};

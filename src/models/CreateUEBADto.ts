/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateUEBADto = {
    /**
     * 数据内容
     */
    data: any;
    /**
     * 功能 id，如果不存在则会使用数据库中查到的第一个 type 为 ueba 的功能
     */
    modelId?: string;
};

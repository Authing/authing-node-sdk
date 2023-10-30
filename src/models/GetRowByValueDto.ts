/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 根据属性值获取数据对象行信息，只允许通过唯一性字段进行精确查询。
 */
export type GetRowByValueDto = {
    /**
     * 功能 id
     */
    modelId?: any;
    /**
     * 字段 key
     */
    key?: any;
    /**
     * 字段值
     */
    value?: any;
    /**
     * 返回结果中是否使用字段 id 作为 key
     */
    showFieldId?: any;
};

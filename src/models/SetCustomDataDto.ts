/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SetCustomDataDto = {
    /**
     * 字段 key，不能和内置字段的 key 冲突
     */
    key: string;
    /**
     * 自定义数据，可以为任意类型，但是必须和创建时定义的自定义字段类型匹配，否则将设置失败
     */
    value: string;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ResGroupDto = {
    /**
     * 分组 ID
     */
    id: string;
    /**
     * 分组 code
     */
    code: string;
    /**
     * 分组名称
     */
    name: string;
    /**
     * 分组描述
     */
    description: string;
    /**
     * 分组类型
     */
    type: string;
    /**
     * 分组元数据信息
     */
    metadataSource: Array<string>;
};

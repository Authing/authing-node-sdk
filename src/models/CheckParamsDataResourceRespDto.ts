/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CheckParamsDataResourceRespDto = {
    /**
     * 数据资源名称或者 Code 校验是否有效
     */
    isValid: boolean;
    /**
     * 数据资源名称或者 Code 校验失败提示信息,如果校验成功, message 不返回
     */
    message?: string;
};

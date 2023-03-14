/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WechatIdentityResolveRespDataDto } from './WechatIdentityResolveRespDataDto';

export type WechatIdentityResolveRespDto = {
    /**
     * 异常 ID：需要中间操作才能完成登录。
     */
    uniqueId?: string;
    /**
     * （仅用于兼容旧版代码）细分错误码，可通过此错误码得到具体的错误类型。
     */
    code?: number;
    /**
     * 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。
     */
    statusCode: number;
    /**
     * 细分错误码，可通过此错误码得到具体的错误类型。
     */
    apiCode?: number;
    /**
     * 描述信息
     */
    message: string;
    /**
     * 响应数据
     */
    data: WechatIdentityResolveRespDataDto;
};

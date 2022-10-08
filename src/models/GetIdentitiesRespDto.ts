/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IdentityDto } from './IdentityDto';

export type GetIdentitiesRespDto = {
    /**
     * 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。
     */
    statusCode: number;
    /**
     * 描述信息
     */
    message: string;
    /**
     * 细分错误码，可通过此错误码得到具体的错误类型。
     */
    apiCode?: number;
    /**
     * 用户的身份源列表
     */
    data: Array<IdentityDto>;
};
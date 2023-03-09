/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FastpassUserInfoDto } from './FastpassUserInfoDto';

export type GeneFastpassQRCodeInfoDto = {
    /**
     * 二维码使用场景。
     */
    scene: string;
    /**
     * 二维码唯一 ID，可以通过此唯一 ID 查询二维码状态。
     */
    qrcodeId: string;
    /**
     * 服务接口 Host 地址
     */
    apiHost: string;
    /**
     * 用户信息
     */
    user: FastpassUserInfoDto;
    /**
     * 当前用户生成二维码时登录的应用 ID
     */
    appId: string;
    /**
     * 用户池信息
     */
    userpool: FastpassUserInfoDto;
};

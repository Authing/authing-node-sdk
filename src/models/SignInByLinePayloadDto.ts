/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignInByLinePayloadDto = {
    /**
     * LINE 移动端社会化登录获取到的 `access_token`
     */
    access_token: string;
    /**
     * LINE 移动端社会化登录获取到的 `id_token`, 需要有 `openid` 的权限，将根据`id_token`获取用户信息，否则根据 `access_token` 获取用户信息
     */
    id_token?: string;
};

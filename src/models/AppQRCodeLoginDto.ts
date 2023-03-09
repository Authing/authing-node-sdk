/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AppQRCodeLoginDto = {
    /**
     * APP 扫二维码登录:
     * - `APP_LOGIN`: APP 扫码登录；
     *
     */
    action: AppQRCodeLoginDto.action;
    /**
     * 二维码唯一 ID
     */
    qrcodeId: string;
};

export namespace AppQRCodeLoginDto {

    /**
     * APP 扫二维码登录:
     * - `APP_LOGIN`: APP 扫码登录；
     *
     */
    export enum action {
        APP_LOGIN = 'APP_LOGIN',
    }


}

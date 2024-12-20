/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GenerateQrcodeDto = {
    /**
     * QR code type. Three types are currently supported:
     * - `MOBILE_APP`: self-built mobile APP scan code
     * - `WECHAT_MINIPROGRAM`: WeChat applet scan code
     * - `WECHAT_OFFICIAL_ACCOUNT` Follow the WeChat official account and scan the QR code
     */
    type: GenerateQrcodeDto.type;
    /**
     * When `type` is `WECHAT_MINIPROGRAM` or `WECHAT_OFFICIAL_ACCOUNT`, you can specify the identity source connection, otherwise the first corresponding identity source connection opened by the application will be used by default to generate the QR code.
     */
    extIdpConnId?: string;
    /**
     * When `type` is `MOBILE_APP`, the user's custom data can be passed. When the user successfully scans the QR code for authorization, this data will be stored in the user's custom data.
     */
    customData?: any;
    /**
     * When type is `WECHAT_OFFICIAL_ACCOUNT` or `WECHAT_MINIPROGRAM`, specify a custom pipeline context, which will be passed in the context of the pipeline
     */
    context?: any;
    /**
     * When type is `WECHAT_MINIPROGRAM`, whether to automatically merge the customized logo into the generated image, the default is false. The process of merging QR codes on the server will increase the interface response speed. It is recommended to use the default value and stitch the images on the client. If you use Authing's SDK, you can save the manual splicing process.
     */
    autoMergeQrCode?: boolean;
};

export namespace GenerateQrcodeDto {

    /**
     * QR code type. Three types are currently supported:
     * - `MOBILE_APP`: self-built mobile APP scan code
     * - `WECHAT_MINIPROGRAM`: WeChat applet scan code
     * - `WECHAT_OFFICIAL_ACCOUNT` Follow the WeChat official account and scan the QR code
     */
    export enum type {
        MOBILE_APP = 'MOBILE_APP',
        WECHAT_MINIPROGRAM = 'WECHAT_MINIPROGRAM',
        WECHAT_OFFICIAL_ACCOUNT = 'WECHAT_OFFICIAL_ACCOUNT',
    }


}

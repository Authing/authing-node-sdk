/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateBizEmailTemplateDto = {
    /**
     * 名称
     */
    name?: string;
    /**
     * 邮件主题
     */
    subject: string;
    /**
     * 邮件内容
     */
    content: string;
    /**
     * 发件人
     */
    sender?: string;
    /**
     * 渲染引擎
     */
    tplEngine?: UpdateBizEmailTemplateDto.tplEngine;
};

export namespace UpdateBizEmailTemplateDto {

    /**
     * 渲染引擎
     */
    export enum tplEngine {
        HANDLEBAR = 'handlebar',
        EJS = 'ejs',
    }


}

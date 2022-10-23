/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PreviewEmailTemplateDataDto = {
    /**
     * 预览的邮件主体内容，为 html 格式文本
     */
    content: string;
    /**
     * 预览的邮件主题内容
     */
    subject: string;
    /**
     * 预览的邮件发件人内容
     */
    sender: string;
};

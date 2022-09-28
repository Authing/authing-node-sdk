/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmailTemplateCategoryDto } from './EmailTemplateCategoryDto';
import type { EmailTemplateDto } from './EmailTemplateDto';

export type GetEmailTemplatesDataDto = {
    /**
     * 模版列表
     */
    templates: Array<EmailTemplateDto>;
    /**
     * 模版类型列表
     */
    categories: Array<EmailTemplateCategoryDto>;
};

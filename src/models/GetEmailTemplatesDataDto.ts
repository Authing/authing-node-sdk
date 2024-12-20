/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmailTemplateCategoryDto } from './EmailTemplateCategoryDto';
import type { EmailTemplateDto } from './EmailTemplateDto';

export type GetEmailTemplatesDataDto = {
    /**
     * Template list
     */
    templates: Array<EmailTemplateDto>;
    /**
     * Template categories
     */
    categories: Array<EmailTemplateCategoryDto>;
};

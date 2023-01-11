/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ISsoPageCustomizationSettingsDto } from './ISsoPageCustomizationSettingsDto';
import type { LanguageCoinfigDto } from './LanguageCoinfigDto';
import type { TabConfigDto } from './TabConfigDto';

export type UpdateLoginConfig = {
    ssoPageCustomizationSettings: ISsoPageCustomizationSettingsDto;
    passwordTabConfig: TabConfigDto;
    verifyCodeTabConfig: TabConfigDto;
    config: LanguageCoinfigDto;
};

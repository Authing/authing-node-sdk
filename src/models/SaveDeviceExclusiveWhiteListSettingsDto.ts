/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WhiteListSettingsDataDto } from './WhiteListSettingsDataDto';

export type SaveDeviceExclusiveWhiteListSettingsDto = {
    /**
     * 白名单配置
     */
    targetList?: Array<WhiteListSettingsDataDto>;
};

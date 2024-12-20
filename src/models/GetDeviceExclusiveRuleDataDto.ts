/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeviceRuleDto } from './DeviceRuleDto';
import type { IPRuleDto } from './IPRuleDto';

export type GetDeviceExclusiveRuleDataDto = {
    /**
     * Device mutual exclusion rule condition configuration:
     * - `disable`: disable
     * - `condition:device`: Triggered by the condition of "device unique identifier"
     * - `condition:ip`: Triggered based on the "recent login IP" condition
     *
     */
    rule: GetDeviceExclusiveRuleDataDto.rule;
    /**
     * The maximum number of "Unique Device Identifiers" online at the same time
     */
    deviceRule?: DeviceRuleDto;
    /**
     * The maximum number of "recently logged in IP" online at the same time
     */
    ipRule?: IPRuleDto;
};

export namespace GetDeviceExclusiveRuleDataDto {

    /**
     * Device mutual exclusion rule condition configuration:
     * - `disable`: disable
     * - `condition:device`: Triggered by the condition of "device unique identifier"
     * - `condition:ip`: Triggered based on the "recent login IP" condition
     *
     */
    export enum rule {
        DISABLE = 'disable',
        CONDITION_DEVICE = 'condition:device',
        CONDITION_IP = 'condition:ip',
    }


}

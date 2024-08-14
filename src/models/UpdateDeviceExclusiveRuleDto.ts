/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DeviceRuleDto } from './DeviceRuleDto';
import type { IPRuleDto } from './IPRuleDto';

export type UpdateDeviceExclusiveRuleDto = {
    /**
     * 设备互斥规则条件配置：
     * - `disable`: 不启用
     * - `condition:device`: 按「设备唯一标识」条件触发
     * - `condition:ip`: 按「最近登录 IP」条件触发
     *
     */
    rule: UpdateDeviceExclusiveRuleDto.rule;
    /**
     * 「设备唯一标识」同时在线数量上限
     */
    deviceRule?: DeviceRuleDto;
    /**
     * 「最近登录 IP」同时在线数量上限
     */
    ipRule?: IPRuleDto;
};

export namespace UpdateDeviceExclusiveRuleDto {

    /**
     * 设备互斥规则条件配置：
     * - `disable`: 不启用
     * - `condition:device`: 按「设备唯一标识」条件触发
     * - `condition:ip`: 按「最近登录 IP」条件触发
     *
     */
    export enum rule {
        DISABLE = 'disable',
        CONDITION_DEVICE = 'condition:device',
        CONDITION_IP = 'condition:ip',
    }


}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SyncTaskClientConfig } from './SyncTaskClientConfig';
import type { SyncTaskFieldMapping } from './SyncTaskFieldMapping';
import type { SyncTaskProvisioningScope } from './SyncTaskProvisioningScope';
import type { SyncTaskTimedScheduler } from './SyncTaskTimedScheduler';

export type CreateSyncTaskDto = {
    /**
     * Field mapping configuration
     */
    fieldMapping: Array<SyncTaskFieldMapping>;
    /**
     * Synchronization task trigger type:
     * - `manually`: trigger execution manually
     * - `timed`: timed trigger
     * - `automatic`: automatically triggered based on events
     *
     */
    syncTaskTrigger: CreateSyncTaskDto.syncTaskTrigger;
    /**
     * Synchronization task data flow direction:
     * - `upstream`: As an upstream, synchronize data to Authing
     * - `downstream`: As a downstream, synchronize Authing data to this system
     *
     */
    syncTaskFlow: CreateSyncTaskDto.syncTaskFlow;
    /**
     * Synchronize task configuration information
     */
    clientConfig: SyncTaskClientConfig;
    /**
     * Synchronization task type:
     * - `lark`: Feishu
     * - `lark-international`: Feishu international version
     * - `wechatwork`: Enterprise WeChat
     * - `dingtalk`: DingTalk
     * - `active-directory`: Windows AD
     * - `ldap`: LDAP
     * - `italent`: Beisen
     * - `maycur`: reimburse every tick
     * - `moka`: Moka
     * - `fxiaoke`: enjoy sales
     * - `xiaoshouyi`: easy sales
     * - `kayang`: Kayang HR
     * - `scim`: Custom synchronization source
     *
     */
    syncTaskType: CreateSyncTaskDto.syncTaskType;
    /**
     * Synchronization task name
     */
    syncTaskName: string;
    /**
     * The organization that this synchronization task is bound to. For upstream synchronization, you need to execute a synchronization task before the organization will be bound; for downstream synchronization, you need to set it when creating a synchronization task.
     */
    organizationCode?: string;
    /**
     * Synchronization scope, **only valid for downstream synchronization tasks**. Leave empty to synchronize the entire organization.
     */
    provisioningScope?: SyncTaskProvisioningScope;
    /**
     * Scheduled synchronization time setting
     */
    timedScheduler?: SyncTaskTimedScheduler;
};

export namespace CreateSyncTaskDto {

    /**
     * Synchronization task type:
     * - `lark`: Feishu
     * - `lark-international`: Feishu international version
     * - `wechatwork`: Enterprise WeChat
     * - `dingtalk`: DingTalk
     * - `active-directory`: Windows AD
     * - `ldap`: LDAP
     * - `italent`: Beisen
     * - `maycur`: reimburse every tick
     * - `moka`: Moka
     * - `fxiaoke`: enjoy sales
     * - `xiaoshouyi`: easy sales
     * - `kayang`: Kayang HR
     * - `scim`: Custom synchronization source
     *
     */
    export enum syncTaskType {
        LARK = 'lark',
        LARK_INTERNATIONAL = 'lark-international',
        WECHATWORK = 'wechatwork',
        DINGTALK = 'dingtalk',
        ACTIVE_DIRECTORY = 'active-directory',
        ITALENT = 'italent',
        MAYCUR = 'maycur',
        LDAP = 'ldap',
        MOKA = 'moka',
        FXIAOKE = 'fxiaoke',
        SCIM = 'scim',
        XIAOSHOUYI = 'xiaoshouyi',
        KAYANG = 'kayang',
        CUSTOM = 'custom',
    }

    /**
     * Synchronization task data flow direction:
     * - `upstream`: As an upstream, synchronize data to Authing
     * - `downstream`: As a downstream, synchronize Authing data to this system
     *
     */
    export enum syncTaskFlow {
        UPSTREAM = 'upstream',
        DOWNSTREAM = 'downstream',
    }

    /**
     * Synchronization task trigger type:
     * - `manually`: trigger execution manually
     * - `timed`: timed trigger
     * - `automatic`: automatically triggered based on events
     *
     */
    export enum syncTaskTrigger {
        MANUALLY = 'manually',
        TIMED = 'timed',
        AUTOMATIC = 'automatic',
    }


}

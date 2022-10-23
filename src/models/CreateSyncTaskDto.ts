/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SyncTaskClientConfig } from './SyncTaskClientConfig';
import type { SyncTaskFieldMapping } from './SyncTaskFieldMapping';
import type { SyncTaskProvisioningScope } from './SyncTaskProvisioningScope';
import type { SyncTaskTimedScheduler } from './SyncTaskTimedScheduler';

export type CreateSyncTaskDto = {
    /**
     * 字段映射配置
     */
    fieldMapping: Array<SyncTaskFieldMapping>;
    /**
     * 同步任务触发类型：
     * - `manually`: 手动触发执行
     * - `timed`: 定时触发
     * - `automatic`: 根据事件自动触发
     *
     */
    syncTaskTrigger: CreateSyncTaskDto.syncTaskTrigger;
    /**
     * 同步任务数据流向：
     * - `upstream`: 作为上游，将数据同步到 Authing
     * - `downstream`: 作为下游，将 Authing 数据同步到此系统
     *
     */
    syncTaskFlow: CreateSyncTaskDto.syncTaskFlow;
    /**
     * 同步任务配置信息
     */
    clientConfig: SyncTaskClientConfig;
    /**
     * 同步任务类型:
     * - `lark`: 飞书
     * - `lark-international`: 飞书国际版
     * - `wechatwork`: 企业微信
     * - `dingtalk`: 钉钉
     * - `active-directory`: Windows AD
     * - `ldap`: LDAP
     * - `italent`: 北森
     * - `maycur`: 每刻报销
     * - `moka`: Moka
     * - `fxiaoke`: 纷享销客
     * - `xiaoshouyi`: 销售易
     * - `kayang`: 嘉扬 HR
     * - `scim`: 自定义同步源
     *
     */
    syncTaskType: CreateSyncTaskDto.syncTaskType;
    /**
     * 同步任务名称
     */
    syncTaskName: string;
    /**
     * 此同步任务绑定的组织机构。针对上游同步，需执行一次同步任务之后才会绑定组织机构；针对下游同步，创建同步任务的时候就需要设置。
     */
    organizationCode?: string;
    /**
     * 同步范围，**只针对下游同步任务有效**。为空表示同步整个组织机构。
     */
    provisioningScope?: SyncTaskProvisioningScope;
    /**
     * 定时同步时间设置
     */
    timedScheduler?: SyncTaskTimedScheduler;
};

export namespace CreateSyncTaskDto {

    /**
     * 同步任务类型:
     * - `lark`: 飞书
     * - `lark-international`: 飞书国际版
     * - `wechatwork`: 企业微信
     * - `dingtalk`: 钉钉
     * - `active-directory`: Windows AD
     * - `ldap`: LDAP
     * - `italent`: 北森
     * - `maycur`: 每刻报销
     * - `moka`: Moka
     * - `fxiaoke`: 纷享销客
     * - `xiaoshouyi`: 销售易
     * - `kayang`: 嘉扬 HR
     * - `scim`: 自定义同步源
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
     * 同步任务数据流向：
     * - `upstream`: 作为上游，将数据同步到 Authing
     * - `downstream`: 作为下游，将 Authing 数据同步到此系统
     *
     */
    export enum syncTaskFlow {
        UPSTREAM = 'upstream',
        DOWNSTREAM = 'downstream',
    }

    /**
     * 同步任务触发类型：
     * - `manually`: 手动触发执行
     * - `timed`: 定时触发
     * - `automatic`: 根据事件自动触发
     *
     */
    export enum syncTaskTrigger {
        MANUALLY = 'manually',
        TIMED = 'timed',
        AUTOMATIC = 'automatic',
    }


}

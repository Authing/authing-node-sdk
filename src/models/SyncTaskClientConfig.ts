/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SyncTaskActiveDirectoryClientConfig } from './SyncTaskActiveDirectoryClientConfig';
import type { SyncTaskDingtalkClientConfig } from './SyncTaskDingtalkClientConfig';
import type { SyncTaskFxiaokeClientConfig } from './SyncTaskFxiaokeClientConfig';
import type { SyncTaskItalentClientConfig } from './SyncTaskItalentClientConfig';
import type { SyncTaskKayangClientConfig } from './SyncTaskKayangClientConfig';
import type { SyncTaskLarkClientConfig } from './SyncTaskLarkClientConfig';
import type { SyncTaskLdapClientConfig } from './SyncTaskLdapClientConfig';
import type { SyncTaskMaycurClientConfig } from './SyncTaskMaycurClientConfig';
import type { SyncTaskMokaClientConfig } from './SyncTaskMokaClientConfig';
import type { SyncTaskScimClientConfig } from './SyncTaskScimClientConfig';
import type { SyncTaskWechatworkClientConfig } from './SyncTaskWechatworkClientConfig';
import type { SyncTaskXiaoshouyiClientConfig } from './SyncTaskXiaoshouyiClientConfig';

export type SyncTaskClientConfig = {
    /**
     * 飞书同步任务配置
     */
    larkConfig?: SyncTaskLarkClientConfig;
    /**
     * 飞书(国际版)同步任务配置
     */
    larkInternationalConfig?: SyncTaskLarkClientConfig;
    /**
     * 企业微信同步任务配置
     */
    wechatworkConfig?: SyncTaskWechatworkClientConfig;
    /**
     * 钉钉同步任务配置
     */
    dingtalkConfig?: SyncTaskDingtalkClientConfig;
    /**
     * Moka 同步任务配置
     */
    mokaConfig?: SyncTaskMokaClientConfig;
    /**
     * 自定义同步源同步任务配置
     */
    scimConfig?: SyncTaskScimClientConfig;
    /**
     * Windows AD 同步任务配置
     */
    activeDirectoryConfig?: SyncTaskActiveDirectoryClientConfig;
    /**
     * LDAP 同步任务配置
     */
    ldapConfig?: SyncTaskLdapClientConfig;
    /**
     * 北森同步任务配置
     */
    italentConfig?: SyncTaskItalentClientConfig;
    /**
     * 每刻报销同步任务配置
     */
    maycurConfig?: SyncTaskMaycurClientConfig;
    /**
     * 纷享销客同步任务配置
     */
    fxiaokeConfig?: SyncTaskFxiaokeClientConfig;
    /**
     * 销售易同步任务配置
     */
    xiaoshouyiConfig?: SyncTaskXiaoshouyiClientConfig;
    /**
     * 嘉扬同步任务配置
     */
    kayangConfig?: SyncTaskKayangClientConfig;
};

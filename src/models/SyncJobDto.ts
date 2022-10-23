/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SyncJobDto = {
    /**
     * 同步作业 ID
     */
    syncJobId: number;
    /**
     * 此同步作业对应的同步任务 ID
     */
    syncTaskId: number;
    /**
     * 创建时间
     */
    createdAt: string;
    /**
     * 更新时间
     */
    updatedAt: string;
    /**
     * 当前同步状态:
     * - `free`: 空闲状态，从未执行
     * - `pending`: 等待系统执行
     * - `onProgress`: 正在执行
     * - `success`: 成功
     * - `failed`: 失败
     *
     */
    syncStatus: SyncJobDto.syncStatus;
    /**
     * 同步任务数据流向：
     * - `upstream`: 作为上游，将数据同步到 Authing
     * - `downstream`: 作为下游，将 Authing 数据同步到此系统
     *
     */
    syncFlow: SyncJobDto.syncFlow;
    /**
     * 同步任务触发类型：
     * - `manually`: 手动触发执行
     * - `timed`: 定时触发
     * - `automatic`: 根据事件自动触发
     *
     */
    syncTrigger: SyncJobDto.syncTrigger;
    /**
     * 需要同步的部门个数
     */
    departmentCountAll: number;
    /**
     * 成功同步的部门个数
     */
    departmentCountSucc: number;
    /**
     * 需要更新的部门个数
     */
    departmentUpdateCountAll: number;
    /**
     * 成功更新的部门个数
     */
    departmentUpdateCountSucc: number;
    /**
     * 需要同步的用户个数
     */
    accountCountAll: number;
    /**
     * 成功同步的用户个数
     */
    accountCountSucc: number;
    /**
     * 需要更新的用户个数
     */
    accountUpdateCountAll: number;
    /**
     * 成功更新的用户个数
     */
    accountUpdateCountSucc: number;
    /**
     * 错误信息
     */
    errMsg?: string;
};

export namespace SyncJobDto {

    /**
     * 当前同步状态:
     * - `free`: 空闲状态，从未执行
     * - `pending`: 等待系统执行
     * - `onProgress`: 正在执行
     * - `success`: 成功
     * - `failed`: 失败
     *
     */
    export enum syncStatus {
        FREE = 'free',
        PENDING = 'pending',
        ON_PROGRESS = 'onProgress',
        SUCCESS = 'success',
        FAILED = 'failed',
    }

    /**
     * 同步任务数据流向：
     * - `upstream`: 作为上游，将数据同步到 Authing
     * - `downstream`: 作为下游，将 Authing 数据同步到此系统
     *
     */
    export enum syncFlow {
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
    export enum syncTrigger {
        MANUALLY = 'manually',
        TIMED = 'timed',
        AUTOMATIC = 'automatic',
    }


}

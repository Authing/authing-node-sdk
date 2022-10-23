/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SyncRiskOperationDto = {
    /**
     * 同步任务风险操作 ID
     */
    syncRiskOperationId: number;
    /**
     * 同步任务 ID
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
     * 执行状态:
     * - `PENDING`: 待执行
     * - `SUCCESS`: 成功
     * - `FAILED`: 失败
     * - `CANCELED`: 已取消
     * - `EXECUTING`: 执行中
     *
     */
    status: SyncRiskOperationDto.status;
    /**
     * 优先级，数字越小表示优先级越高。
     */
    level: number;
    /**
     * 操作对象类型:
     * - `department`: 部门
     * - `user`: 用户
     *
     */
    objectType: SyncRiskOperationDto.objectType;
    /**
     * 操作对象（用户、分组、部门）名称
     */
    objectName: string;
    /**
     * 操作对象 ID
     */
    objectId: string;
    /**
     * 执行失败的错误信息
     */
    errMsg?: string;
};

export namespace SyncRiskOperationDto {

    /**
     * 执行状态:
     * - `PENDING`: 待执行
     * - `SUCCESS`: 成功
     * - `FAILED`: 失败
     * - `CANCELED`: 已取消
     * - `EXECUTING`: 执行中
     *
     */
    export enum status {
        PENDING = 'PENDING',
        SUCCESS = 'SUCCESS',
        FAILED = 'FAILED',
        CANCELED = 'CANCELED',
        EXECUTING = 'EXECUTING',
    }

    /**
     * 操作对象类型:
     * - `department`: 部门
     * - `user`: 用户
     *
     */
    export enum objectType {
        DEPARTMENT = 'DEPARTMENT',
        USER = 'USER',
    }


}

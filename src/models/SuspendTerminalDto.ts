/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SuspendTerminalDto = {
    /**
     * 挂起到期时间，时间戳(毫秒)
     */
    endTime: number;
    /**
     * 数据行 id，创建设备时返回的 `id`
     */
    id: string;
};

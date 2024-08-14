/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ImportInviteeDto = {
    /**
     * 操作是否成功
     */
    success: boolean;
    /**
     * 操作结果
     */
    msg?: boolean;
    /**
     * 数据检查结果
     */
    failed?: Array<any>;
    /**
     * 数据导入结果
     */
    insertRes?: Array<any>;
};

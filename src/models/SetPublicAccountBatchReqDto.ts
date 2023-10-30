/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SetPublicAccountBatchReqDto = {
    /**
     * 用户唯一标志，可以是用户 ID、用户名、邮箱、手机号、外部 ID、在外部身份源的 ID。
     */
    publicAccountId: string;
    /**
     * 用户 ID 数组
     */
    userIds: Array<string>;
};

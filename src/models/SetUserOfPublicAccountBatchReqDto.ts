/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SetUserOfPublicAccountBatchReqDto = {
    /**
     * 用户的唯一标志，可以是用户 ID、用户名、邮箱、手机号、externalId、在外部身份源的 ID，详情见 userIdType 字段的说明。默认为用户 id 。
     */
    userId: string;
    /**
     * 用户 ID 数组
     */
    publicAccountIds: Array<string>;
};

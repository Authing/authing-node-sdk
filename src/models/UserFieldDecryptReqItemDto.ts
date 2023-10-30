/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserFieldDecryptReqItemDto = {
    /**
     * 用户唯一标志，可以是用户 ID、用户名、邮箱、手机号、外部 ID、在外部身份源的 ID。
     */
    userId?: string;
    /**
     * 字段的key名称，例如 username/phone
     */
    fieldName?: string;
    /**
     * 字段加密后的内容
     */
    encryptedContent: string;
};

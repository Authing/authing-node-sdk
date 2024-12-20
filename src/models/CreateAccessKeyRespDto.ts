/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateAccessKeyRespDto = {
    /**
     * accessKeyId owned by the user
     */
    accessKeyId: string;
    /**
     * accessKeySecret owned by the user
     */
    accessKeySecret: string;
    /**
     *User ID
     */
    userId: string;
    /**
     * Creation time
     */
    createdAt: string;
    /**
     * accessKeyId status
     */
    status: string;
    /**
     *Last use time
     */
    lastDate: string;
    /**
     * The user pool where accessKeyId is located
     */
    userPoolId: string;
    /**
     * Whether the key is enabled
     */
    enable: boolean;
};

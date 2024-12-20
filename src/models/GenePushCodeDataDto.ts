/*istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GenePushCodeDataDto = {
    /**
     * Push code (push login unique ID), you can query the push code status through this unique ID.
     */
    pushCodeId: string;
    /**
     * The push code will expire after `${expireTime}` seconds, for example, it will expire after 120 seconds.
     */
    expireTime: number;
};

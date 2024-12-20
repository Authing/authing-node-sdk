/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BindByEmailCodeInputApi = {
    /**
     * Intermediate key
     */
    key: string;
    /**
     * Operation code
     */
    action: string;
    /**
     * Email verification code (four digits: 1234; six digits: 123456)
     */
    code: string;
    /**
     * Mail
     */
    email: string;
};

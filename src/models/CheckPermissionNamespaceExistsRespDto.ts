/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CheckPermissionNamespaceExistsRespDto = {
    /**
     * Verify whether the permission space name or permission space name Code is valid
     */
    isValid: boolean;
    /**
     * Prompt message for permission space name or permission space Code verification failure. If the verification is successful, Message will not be returned.
     */
    message?: string;
};

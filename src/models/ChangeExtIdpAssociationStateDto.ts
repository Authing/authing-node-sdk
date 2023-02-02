/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChangeExtIdpAssociationStateDto = {
    /**
     * 身份源连接 ID
     */
    id: string;
    /**
     * 是否关联身份源
     */
    association: boolean;
    /**
     * 租户 ID
     */
    tenantId?: string;
};

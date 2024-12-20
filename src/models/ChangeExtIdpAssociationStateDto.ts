/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChangeExtIdpAssociationStateDto = {
    /**
     * Identity source connection ID
     */
    id: string;
    /**
     * Whether to associate the identity source
     */
    association: boolean;
    /**
     * Tenant ID
     */
    tenantId?: string;
};

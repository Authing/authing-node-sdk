/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * This interface is used for Excel to import historical queries of tenants.
 */
export type ImportTenantHistoryDto = {
    /**
     *Page number
     */
    page?: any;
    /**
     *Amount of data obtained per page
     */
    limit?: any;
};

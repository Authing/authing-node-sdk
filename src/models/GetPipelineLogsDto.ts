/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Get Pipeline
 */
export type GetPipelineLogsDto = {
    /**
     * Pipeline function ID
     */
    funcId?: any;
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page, the maximum cannot exceed 50, the default is 10
     */
    limit?: any;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetAllRowVyScrollidDto = {
    /**
     * The number of data obtained each time is 500 by default, and the maximum is 5000.
     */
    size: number;
    /**
     * function id
     */
    modelId: string;
    /**
     * Paging query scroll id
     */
    scrollId?: string;
    /**
     * Query data id
     */
    id?: string;
    /**
     * Query data based on specific fields
     */
    query?: any;
    /**
     * Whether to return related field details, default false
     */
    getRelationDetails?: boolean;
};

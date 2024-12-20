/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * This interface is used to obtain the user's department list, which can be sorted according to certain sorting rules.
 */
export type GetDepartmentListDto = {
    /**
     * Current page number, starting from 1
     */
    page?: any;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: any;
    /**
     * Whether to obtain the department’s custom data
     */
    withCustomData?: any;
    /**
     * Sorting basis, such as department creation time, department joining time, department name, department identifier
     */
    sortBy?: any;
    /**
     * ascending or descending order
     */
    orderBy?: any;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreatePostDto = {
    /**
     *Position code
     */
    code: string;
    /**
     *Position name
     */
    name: string;
    /**
     *Position ID
     */
    id?: string;
    /**
     *Job description
     */
    description?: string;
    /**
     * Department id list
     */
    departmentIdList?: string;
};

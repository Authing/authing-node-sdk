/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateGroupReqDto = {
    /**
     * Grouping type
     */
    type: string;
    /**
     *Group description
     */
    description: string;
    /**
     * Group name
     */
    name: string;
    /**
     * group code
     */
    code: string;
    /**
     * Custom data, the key in the object passed in must first define the relevant custom fields in the user pool
     */
    customData?: any;
};

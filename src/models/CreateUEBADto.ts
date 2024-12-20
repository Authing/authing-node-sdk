/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateUEBADto = {
    /**
     * Data content
     */
    data: any;
    /**
     * Function id, if it does not exist, the first function with type ueba found in the database will be used
     */
    modelId?: string;
};

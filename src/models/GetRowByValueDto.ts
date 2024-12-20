/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Obtain data object row information based on attribute values, and only allow precise queries through unique fields.
 */
export type GetRowByValueDto = {
    /**
     * function id
     */
    modelId?: any;
    /**
     * field key
     */
    key?: any;
    /**
     *Field value
     */
    value?: any;
    /**
     * Whether to use field id as key in the return result
     */
    showFieldId?: any;
};

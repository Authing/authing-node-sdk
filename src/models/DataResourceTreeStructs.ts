/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DataResourceTreeStructs = {
    /**
     * Data resource node Code, unique at the same level
     */
    code: string;
    /**
     * Data resource node name, unique at the same level
     */
    name: string;
    /**
     * Data resource node Value
     */
    value?: string;
    /**
     * The child node of the data resource node supports up to five levels of child nodes.
     */
    children?: Array<any>;
    /**
     * Extended field value, stored in key:value format
     */
    extendFieldValue?: any;
};

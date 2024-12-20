/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DataResourcePolicyTreeStructs = {
    /**
     * Data resource policy node Code, unique at the same level
     */
    code: string;
    /**
     * Data resource strategy node Value
     */
    value?: string;
    /**
     * Data resource node name, unique at the same level
     */
    name: string;
    /**
     * Data resource policy node action action
     */
    action: string;
    /**
     * Whether the data resource policy node enables action
     */
    enabled: boolean;
    /**
     * Sub-node data, sub-node data can have up to five levels
     */
    children?: Array<string>;
};

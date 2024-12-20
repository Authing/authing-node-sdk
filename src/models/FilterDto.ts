/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Condition } from './Condition';
import type { Expand } from './Expand';
import type { ScopeDto } from './ScopeDto';

export type FilterDto = {
    /**
     * function id
     */
    modelId: string;
    /**
     * Keyword
     */
    keywords?: string;
    /**
     * Relationship between multiple search conditions:
     * - and: and
     * - or: or
     *
     */
    conjunction?: string;
    /**
     *Search criteria
     */
    conditions?: Array<Condition>;
    /**
     * Sorting conditions
     */
    sort?: Array<any>;
    /**
     * Current page number, starting from 1
     */
    page?: number;
    /**
     * The number of pages per page cannot exceed 50, and the default is 10
     */
    limit?: number;
    /**
     * Whether to return all without paging (only supports the scenario of obtaining child nodes in a tree structure)
     */
    fetchAll?: boolean;
    /**
     * Whether to return the full path of the node (only supports tree structure)
     */
    withPath?: boolean;
    /**
     * Whether to use field id as key in the return result
     */
    showFieldId?: boolean;
    /**
     * The returned results are previews containing associated data (the first three)
     */
    previewRelation?: boolean;
    /**
     * Whether to return detailed user information of associated data, currently only supports users.
     */
    getRelationFieldDetail?: boolean;
    /**
     * Limit the search scope to the part associated with a certain function
     */
    scope?: ScopeDto;
    /**
     * Filter specified related data
     */
    filterRelation?: ScopeDto;
    /**
     * Get detailed fields corresponding to related data
     */
    expand?: Array<Expand>;
    /**
     * Whether to return nested related data
     */
    getNestData?: boolean;
};

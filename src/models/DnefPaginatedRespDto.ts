/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExtendField } from './ExtendField';

export type DnefPaginatedRespDto = {
    /**
     * The index starting from the next page, returns -1 when the last page is
     */
    nextStartIndex: number;
    /**
     * Whether it is truncated, true means the next page can be queried, false means the last page of data
     */
    truncated: boolean;
    /**
     *Response data
     */
    list: Array<ExtendField>;
};

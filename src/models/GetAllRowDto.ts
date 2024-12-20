/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Condition } from './Condition';

export type GetAllRowDto = {
    /**
     * function id
     */
    modelId: string;
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
};

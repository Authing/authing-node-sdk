/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CellDto } from './CellDto';

export type RowDto = {
    /**
     * 行 id
     */
    rowId: string;
    /**
     * 单元格列表
     */
    cellList: Array<CellDto>;
};

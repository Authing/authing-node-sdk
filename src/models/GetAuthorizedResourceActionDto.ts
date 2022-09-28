/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetAuthorizedResourceActionDto = {
    /**
     * AND or OR
     */
    op: GetAuthorizedResourceActionDto.op;
    /**
     * Action 列表
     */
    list: Array<string>;
};

export namespace GetAuthorizedResourceActionDto {

    /**
     * AND or OR
     */
    export enum op {
        AND = 'AND',
        OR = 'OR',
    }


}

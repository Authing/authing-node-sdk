/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DataStatementPermissionDto = {
    /**
     * Data resource permission operations: ALLOW (allow)/DENY (deny)
     */
    effect: DataStatementPermissionDto.effect;
    /**
     * Resource permission list, string data resources and array data resources, no path path
     */
    permissions: Array<string>;
};

export namespace DataStatementPermissionDto {

    /**
     * Data resource permission operations: ALLOW (allow)/DENY (deny)
     */
    export enum effect {
        DENY = 'DENY',
        ALLOW = 'ALLOW',
    }


}

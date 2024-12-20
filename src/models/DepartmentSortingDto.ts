/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DepartmentSortingDto = {
    /**
     * Field for sorting, optional values are:
     * - `updatedAt`: creation time
     * - `createdAt`: modification time
     * - `name`: email
     *
     */
    field: DepartmentSortingDto.field;
    /**
     * Sort order:
     * - `desc`: In descending order from large to small.
     * - `asc`: In ascending order from small to large.
     *
     */
    order: DepartmentSortingDto.order;
};

export namespace DepartmentSortingDto {

    /**
     * Field for sorting, optional values are:
     * - `updatedAt`: creation time
     * - `createdAt`: modification time
     * - `name`: email
     *
     */
    export enum field {
        UPDATED_AT = 'updatedAt',
        CREATED_AT = 'createdAt',
        NAME = 'name',
    }

    /**
     * Sort order:
     * - `desc`: In descending order from large to small.
     * - `asc`: In ascending order from small to large.
     *
     */
    export enum order {
        DESC = 'desc',
        ASC = 'asc',
    }


}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DepartmentSortingDto = {
    /**
     * 进行排序的字段，可选值为：
     * - `updatedAt`: 创建时间
     * - `createdAt`: 修改时间
     * - `name`: 邮箱
     *
     */
    field: DepartmentSortingDto.field;
    /**
     * 排序顺序：
     * - `desc`: 按照从大到小降序。
     * - `asc`: 按照从小到大升序。
     *
     */
    order: DepartmentSortingDto.order;
};

export namespace DepartmentSortingDto {

    /**
     * 进行排序的字段，可选值为：
     * - `updatedAt`: 创建时间
     * - `createdAt`: 修改时间
     * - `name`: 邮箱
     *
     */
    export enum field {
        UPDATED_AT = 'updatedAt',
        CREATED_AT = 'createdAt',
        NAME = 'name',
    }

    /**
     * 排序顺序：
     * - `desc`: 按照从大到小降序。
     * - `asc`: 按照从小到大升序。
     *
     */
    export enum order {
        DESC = 'desc',
        ASC = 'asc',
    }


}

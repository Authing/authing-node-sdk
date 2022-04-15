/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TargetDto = {
    /**
     * 目标类型，接受用户，部门
     */
    targetType: TargetDto.targetType;
    /**
     * 目标的 ID
     */
    targetIdentifier: string;
};

export namespace TargetDto {

    /**
     * 目标类型，接受用户，部门
     */
    export enum targetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        DEPARTMENT = 'DEPARTMENT',
    }


}

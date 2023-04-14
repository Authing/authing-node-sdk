/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListAuthSubjectDto = {
    /**
     * 主体类型
     */
    targetType: ListAuthSubjectDto.targetType;
    /**
     * 主体 id
     */
    targetId: string;
    /**
     * 应用名称
     */
    appName?: string;
    /**
     * 应用类型列表
     */
    appTypeList?: Array<string>;
    /**
     * 操作类型列表
     */
    effect?: Array<string>;
    /**
     * 开关
     */
    enabled?: boolean;
};

export namespace ListAuthSubjectDto {

    /**
     * 主体类型
     */
    export enum targetType {
        USER = 'USER',
        ROLE = 'ROLE',
        GROUP = 'GROUP',
        ORG = 'ORG',
        AK_SK = 'AK_SK',
    }


}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListApplicationAuthDto = {
    /**
     * 应用 ID
     */
    appId: string;
    /**
     * 当前页数，从 1 开始
     */
    page?: number;
    /**
     * 每页数目，最大不能超过 50，默认为 10
     */
    limit?: number;
    /**
     * 主体名称
     */
    targetName?: string;
    /**
     * 主体类型列表, USER/ORG/ROLE/GROUP
     */
    targetTypeList?: Array<string>;
    /**
     * 操作，ALLOW/DENY
     */
    effect?: ListApplicationAuthDto.effect;
    /**
     * 授权是否生效开关,
     */
    enabled?: boolean;
};

export namespace ListApplicationAuthDto {

    /**
     * 操作，ALLOW/DENY
     */
    export enum effect {
        ALLOW = 'ALLOW',
        DENY = 'DENY',
    }


}

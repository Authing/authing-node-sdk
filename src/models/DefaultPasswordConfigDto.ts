/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DefaultPasswordConfigDto = {
    /**
     * 秘密初始化方式
     * - `random`: 系统随机
     * - `custom`: 指定固定值
     */
    type: DefaultPasswordConfigDto.type;
    /**
     * 初始密码固定值
     */
    custom?: string;
};

export namespace DefaultPasswordConfigDto {

    /**
     * 秘密初始化方式
     * - `random`: 系统随机
     * - `custom`: 指定固定值
     */
    export enum type {
        RANDOM = 'random',
        CUSTOM = 'custom',
    }


}

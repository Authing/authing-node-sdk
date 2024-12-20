/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DefaultPasswordConfigDto = {
    /**
     *Secret initialization method
     * - `random`: system random
     * - `custom`: specify a fixed value
     */
    type: DefaultPasswordConfigDto.type;
    /**
     * Fixed value of initial password
     */
    custom?: string;
};

export namespace DefaultPasswordConfigDto {

    /**
     *Secret initialization method
     * - `random`: system random
     * - `custom`: specify a fixed value
     */
    export enum type {
        RANDOM = 'random',
        CUSTOM = 'custom',
    }


}

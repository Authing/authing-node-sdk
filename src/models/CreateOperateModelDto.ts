/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateOperateModelDto = {
    /**
     * Whether to display:
     * - true: display
     * - true: do not display
     *
     */
    show: boolean;
    /**
     * icon
     */
    icon: string;
    /**
     * Operation configuration
     */
    config: any;
    /**
     * Operation name
     */
    operateName: string;
    /**
     * Operation type:
     * - openPage: open a web page
     *
     */
    operateKey: string;
    /**
     *modelId
     */
    modelId: string;
};

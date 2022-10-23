/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdatePipelineFunctionDto = {
    /**
     * Pipeline 函数 ID
     */
    funcId: string;
    /**
     * 函数名称
     */
    funcName?: string;
    /**
     * 函数描述
     */
    funcDescription?: string;
    /**
     * 函数源代码。如果修改之后，函数会重新上传。
     */
    sourceCode?: string;
    /**
     * 是否异步执行。设置为异步执行的函数不会阻塞整个流程的执行，适用于异步通知的场景，比如飞书群通知、钉钉群通知等。
     */
    isAsynchronous?: boolean;
    /**
     * 函数运行超时时间，最短为 1 秒，最长为 60 秒，默认为 3 秒。
     */
    timeout?: number;
    /**
     * 如果函数运行超时，是否终止整个流程，默认为否。
     */
    terminateOnTimeout?: boolean;
    /**
     * 是否启用此 Pipeline
     */
    enabled?: boolean;
};

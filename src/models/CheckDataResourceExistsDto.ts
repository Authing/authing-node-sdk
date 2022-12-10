/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * 检查数据资源名称或者 Code 在权限空间内是否有效,通过数据资源名称或者数据资源 Code 以及所属权限空间 Code,判断在指定的权限空间内是否可用。
 *
 * ### 数据资源 Code 有效示例
 *
 * - 入参
 *
 * ```json
 * {
     * "namespaceCode": "examplePermissionNamespace",
     * "resourceCode": "test"
     * }
     * ```
     *
     * - 出参
     *
     * ```json
     * {
         * "statusCode": 200,
         * "message": "操作成功",
         * "apiCode": 0,
         * "data": {
             * "isValid": "true"
             * }
             * }
             * ```
             *
             * ### 数据资源名称有效示例
             *
             * - 入参
             *
             * ```json
             * {
                 * "namespaceCode": "examplePermissionNamespace",
                 * "resourceName": "test"
                 * }
                 * ```
                 *
                 * - 出参
                 *
                 * ```json
                 * {
                     * "statusCode": 200,
                     * "message": "操作成功",
                     * "apiCode": 0,
                     * "data": {
                         * "isValid": "true"
                         * }
                         * }
                         * ```
                         *
                         * ### 数据资源 Code 无效示例
                         *
                         * - 入参
                         *
                         * ```json
                         * {
                             * "namespaceCode": "examplePermissionNamespace",
                             * "resourceCode": "test"
                             * }
                             * ```
                             *
                             * - 出参
                             *
                             * ```json
                             * {
                                 * "statusCode": 200,
                                 * "message": "操作成功",
                                 * "apiCode": 0,
                                 * "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
                                 * "data": {
                                     * "isValid": "false",
                                     * "message": "data resource code already exist"
                                     * }
                                     * }
                                     * ```
                                     *
                                     */
                                    export type CheckDataResourceExistsDto = {
                                        /**
                                         * 数据资源所属的权限空间 Code
                                         */
                                        namespaceCode?: any;
                                        /**
                                         * 数据资源名称,权限空间内唯一
                                         */
                                        resourceName?: any;
                                        /**
                                         * 数据资源 Code,权限空间内唯一
                                         */
                                        resourceCode?: any;
                                    };

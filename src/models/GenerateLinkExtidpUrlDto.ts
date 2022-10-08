/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 *
 *
 * 由于绝大多数的外部身份源登录不允许在第三方系统直接输入账号密码进行登录，所以外部身份源的绑定总是需要先跳转到对方的登录页面进行认证。此端点会通过浏览器 `302` 跳转的方式先跳转到第三方的登录页面，
 * 终端用户在第三方系统认证完成之后，浏览器再会跳转到 Authing 服务器，Authing 服务器会将此外部身份源绑定到该用户身上。最终的结果会通过浏览器 Window Post Message 的方式传递给开发者。
 * 你可以在你的应用系统中放置一个按钮，引导用户点击之后，弹出一个 Window Popup，地址为此端点，当用户在第三方身份源认证完成之后，此 Popup 会通过 Window Post Message 的方式传递给父窗口。
 *
 * 为此我们在 `@authing/browser` SDK 中封装了相关方法，为开发者省去了其中大量的细节：
 *
 * ```typescript
 * import { Authing } from "@authing/browser"
 * const sdk = new Authing({
     * // 应用的认证地址，例如：https://domain.authing.cn
     * domain: "",
     *
     * // Authing 应用 ID
     * appId: "you_authing_app_id",
     *
     * // 登录回调地址，需要在控制台『应用配置 - 登录回调 URL』中指定
     * redirectUri: "your_redirect_uri"
     * });
     *
     *
     * // success 表示此次绑定操作是否成功；
     * // errMsg 为如果绑定失败，具体的失败原因，如此身份源已被其他账号绑定等。
     * // identities 为此次绑定操作具体绑定的第三方身份信息
     * const { success, errMsg, identities } = await sdk.bindExtIdpWithPopup({
         * "extIdpConnIdentifier": "my-wechat"
         * })
         *
         * ```
         *
         * 绑定外部身份源成功之后，你可以得到用户在此第三方身份源的信息，以绑定飞书账号为例：
         *
         * ```json
         * [
             * {
                 * "identityId": "62f20932xxxxbcc10d966ee5",
                 * "extIdpId": "62f209327xxxxcc10d966ee5",
                 * "provider": "lark",
                 * "type": "open_id",
                 * "userIdInIdp": "ou_8bae746eac07cd2564654140d2a9ac61",
                 * "originConnIds": ["62f2093244fa5cb19ff21ed3"]
                 * },
                 * {
                     * "identityId": "62f726239xxxxe3285d21c93",
                     * "extIdpId": "62f209327xxxxcc10d966ee5",
                     * "provider": "lark",
                     * "type": "union_id",
                     * "userIdInIdp": "on_093ce5023288856aa0abe4099123b18b",
                     * "originConnIds": ["62f2093244fa5cb19ff21ed3"]
                     * },
                     * {
                         * "identityId": "62f72623e011cf10c8851e4c",
                         * "extIdpId": "62f209327xxxxcc10d966ee5",
                         * "provider": "lark",
                         * "type": "user_id",
                         * "userIdInIdp": "23ded785",
                         * "originConnIds": ["62f2093244fa5cb19ff21ed3"]
                         * }
                         * ]
                         * ```
                         *
                         * 可以看到，我们获取到了用户在飞书中的身份信息：
                         *
                         * - `open_id`: ou_8bae746eac07cd2564654140d2a9ac61
                         * - `union_id`: on_093ce5023288856aa0abe4099123b18b
                         * - `user_id`: 23ded785
                         *
                         * 绑定此外部身份源之后，后续用户就可以使用此身份源进行登录了，见**登录**接口。
                         *
                         *
                         */
                        export type GenerateLinkExtidpUrlDto = {
                            /**
                             * 外部身份源连接唯一标志
                             */
                            extIdpConnIdentifier?: any;
                            /**
                             * Authing 应用 ID
                             */
                            appId?: any;
                            /**
                             * 用户的 id_token
                             */
                            idToken?: any;
                        };

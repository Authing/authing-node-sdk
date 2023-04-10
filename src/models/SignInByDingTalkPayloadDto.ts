/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignInByDingTalkPayloadDto = {
    /**
     * 钉钉移动端社会化登录获取到的 code
     */
    code: string;
    /**
     * 如果钉钉移动端社会化登录获取到的 `code` 需要调用 `sns/getuserinfo_bycode` 接口获取授权用户的个人信息，则参数 `isSnsCode` 传 `true`， 否则将通过 `code` 换取 `accessToken` 再获取用户信息
     */
    isSnsCode?: boolean;
};

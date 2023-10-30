/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LinkIdentityDto = {
    /**
     * 必传，用户在该外部身份源的唯一标识，需要从外部身份源的认证返回值中获取。
     */
    userIdInIdp: string;
    /**
     * 必传，进行绑定操作的 Authing 用户 ID。
     */
    userId: string;
    /**
     * 必传，身份源 ID，用于指定该身份属于哪个身份源。
     */
    extIdpId: string;
    /**
     * 非必传，表示该条身份的具体类型，可从用户身份信息的 type 字段中获取。如果不传，默认为 generic
     */
    type?: string;
    /**
     * 已废弃，可任意传入，未来将移除该字段。
     */
    isSocial?: boolean;
};

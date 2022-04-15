export type Lang = 'zh-CN' | 'en-US';

/**
 * 初始化 Authing SDK 的参数，secret 和 accessToken 必须传其中一个。
 */
export interface ManagementClientOptions {
    /** 用户池 ID **/
    userPoolId?: string;
    /** 应用 ID */
    appId?: string;
    /** 租户 ID */
    tenantId?: string;
    /** 用户池/应用密钥 **/
    secret?: string;
    /** 用户池 accessToken，如果传入，请注意 token 过期状态，你需要自己维护此 Token 的状态，SDK 不会自动更新  **/
    accessToken?: string;
    /** 请求超时时间 **/
    timeout?: number;
    /** 错误回调函数, 默认为 (err: Error) => { throw err } 直接抛出报错 **/
    onError?: (code: number, message: string, data?: any) => void;
    /** Authing 服务器地址 */
    host?: string;
    /** 请求来源 */
    requestFrom?: string;

    /**
     * 语言
     */
    lang?: Lang;

    /**
     * 请求头 key，适用于去 Authing 品牌化场景
     */
    headers?: {
        'userpool-id': string;
        'app-id': string;
        'tenant-id'?: string;
        'sdk-version': string;
        'request-from': string;
        lang: string;
    };
}

export const DEFAULT_OPTIONS: ManagementClientOptions = {
    timeout: 10000,
    onError: (code: number, message: string) => {
        throw { code, message };
    },
    host: 'https://core.authing.cn',
    requestFrom: 'sdk',
    headers: {
        'userpool-id': 'x-authing-userpool-id',
        'app-id': 'x-authing-app-id',
        'tenant-id': 'x-authing-app-tenant-id',
        'request-from': 'x-authing-request-from',
        'sdk-version': 'x-authing-sdk-version',
        lang: 'x-authing-lang',
    },
    lang: 'zh-CN',
};

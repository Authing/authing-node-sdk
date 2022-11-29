import { Lang } from "./utils";


export interface ManagementClientOptions {
  /** 用户池 ID **/
  accessKeyId: string;
  /** 用户池密钥 **/
  accessKeySecret: string;
  /** 租户 ID */
  tenantId?: string;
  /** 请求超时时间 **/
  timeout?: number;
  /** Authing 服务器地址 */
  host?: string;
  /**
   * 语言
   */
  lang?: Lang;

  /**
   * 是否拒绝非法的 HTTPS 请求，默认为 true；如果是私有化部署的场景且证书不被信任，可以设置为 false
   */
  rejectUnauthorized?: boolean;

  // /**
  //  * 请求头 key，适用于去 Authing 品牌化场景
  //  */
  // headers?: {
  //   "app-id": string;
  //   "tenant-id"?: string;
  //   "sdk-version": string;
  //   "request-from": string;
  //   lang: string;
  // };
}

export const DEFAULT_OPTIONS: ManagementClientOptions = {
  timeout: 10000,
  host: "https://api.authing.cn",
  // headers: {
  //   "app-id": "x-authing-app-id",
  //   "tenant-id": "x-authing-app-tenant-id",
  //   "request-from": "x-authing-request-from",
  //   "sdk-version": "x-authing-sdk-version",
  //   lang: "x-authing-lang",
  // },
  lang: "zh-CN",
  accessKeyId: "",
  accessKeySecret: "",
  rejectUnauthorized: true
};

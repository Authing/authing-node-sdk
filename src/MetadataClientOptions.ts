import { Lang } from './utils';

export interface MetadataClientOptions {
  /** 用户池 ID **/
  accessKeyId: string;

  /** 用户池密钥 **/
  accessKeySecret: string;

  /** 请求超时时间 **/
  timeout?: number;

  /** Authing 服务器地址 */
  host?: string;

  /** 语言 */
  lang?: Lang;

  /** 是否拒绝非法的 HTTPS 请求，默认为 true；如果是私有化部署的场景且证书不被信任，可以设置为 false */
  rejectUnauthorized?: boolean;
}

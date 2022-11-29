import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import { ManagementClientOptions } from "./ManagementClientOptions";
import { pickBy } from "./utils";
import {
  buildAuthorization,
  buildStringToSign,
  DEFAULT_HEADERS,
} from "./utils/buildSignature";
import https from "https";

export class ManagementHttpClient {
  options: ManagementClientOptions;
  axios: AxiosInstance;

  constructor(options: ManagementClientOptions) {
    this.options = options;
    this.axios = Axios.create({
      withCredentials: true,
    });
  }

  async request(config: AxiosRequestConfig) {
    // 此次请求的请求头
    let headers: any = {};
    if (this.options.tenantId) {
      headers["x-authing-tenant-id"] = this.options.tenantId;
    }
    headers["x-authing-lang"] = this.options.lang || "zh-CN";
    headers["date"] = new Date().toUTCString();
    headers = Object.assign(DEFAULT_HEADERS(), headers);

    // 计算签名
    const stringToSign = buildStringToSign(
      config.method!,
      config.url!,
      headers,
      config.method === 'GET' ? config.params || {} : config.data || {},
    );
    headers["authorization"] = buildAuthorization(
      this.options.accessKeyId,
      this.options.accessKeySecret,
      stringToSign
    );

    config.headers = headers;
    config.timeout = this.options.timeout;
    const { data } = await this.axios.request({
      ...config,
      headers: {
        ...pickBy(config.headers, (i) => !!i),
      },
      httpsAgent:
      this.options.rejectUnauthorized === false
        ? new https.Agent({
            rejectUnauthorized: false,
          })
        : undefined,
    });
    return data;
  }
}

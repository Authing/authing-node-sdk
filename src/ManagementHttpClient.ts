import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import { ManagementClientOptions } from "./ManagementClientOptions";
import { ManagementTokenProvider } from "./ManagementTokenProvider";
import { pickBy } from "./utils";
import {
  buildAuthorization,
  buildStringToSign,
  DEFAULT_HEADERS,
} from "./utils/buildSignature";
const kitx = require("kitx");

export class ManagementHttpClient {
  options: ManagementClientOptions;
  axios: AxiosInstance;
  tokenProvider: ManagementTokenProvider;

  constructor(options: ManagementClientOptions) {
    this.options = options;
    this.tokenProvider = new ManagementTokenProvider(this.options);
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
    headers["date"] = +new Date();
    headers = Object.assign(DEFAULT_HEADERS, headers);

    const requestData = config?.data || config?.params || {};
    const requestDataBuffer = Buffer.from(JSON.stringify(requestData), 'utf8');
    headers['content-md5'] = kitx.md5(requestDataBuffer, 'base64');

    // 计算签名
    const stringToSign = buildStringToSign(
      config.method!,
      config.url!,
      headers,
      config.method === 'GET' ? config.params || {} : config.data || {},
    );
    console.log(stringToSign)
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
    });
    return data;
  }
}

import Axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";
import { AuthenticationClientInitOptions } from "./AuthenticationClientOptions";
import https from "https";

export class AuthenticationHttpClient {
  options: AuthenticationClientInitOptions;
  axios: AxiosInstance;

  constructor(options: AuthenticationClientInitOptions) {
    this.options = options;
    this.axios = Axios.create({
      withCredentials: true,
    });
  }

  async request(config: AxiosRequestConfig) {
    const headers: AxiosRequestHeaders = {
      ...config.headers,
      "x-authing-app-id": this.options.appId,
    };

    // 如果设置的 tokenEndPointAuthMethod 为 client_secret_basic 并且调用的是 /oidc 相关接口：
    // 1. 获取 token: /oidc(oauth)/token
    // 2. 撤销 token: /oidc(oauth)/token/revocation
    // 3. 检查 token: /oidc(oauth)/token/introspection
    // 4. 其他登录获取 token 接口
    const endpointsToSendBasicHeader = [
      "/oidc/token",
      "/oidc/token/revocation",
      "/oidc/token/introspection",
      "/oauth/token",
      "/oauth/token/revocation",
      "/oauth/token/introspection",
      "/api/v3/signin",
      "/api/v3/signin-by-mobile",
      "/api/v3/exchange-tokenset-with-qrcode-ticket"
    ];
    if (this.options.tokenEndPointAuthMethod === "client_secret_basic" && endpointsToSendBasicHeader.includes(config.url!)) {
      headers["authorization"] =
      "Basic " +
      Buffer.from(
        this.options.appId + ":" + this.options.appSecret
      ).toString("base64");
    } else if (this.options.accessToken) {
      headers["authorization"] = this.options.accessToken;
    }

    const { data } = await this.axios.request({
      ...config,
      baseURL: this.options.appHost,
      timeout: this.options.timeout,
      headers,
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

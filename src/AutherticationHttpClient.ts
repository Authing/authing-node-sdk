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
    if (this.options.accessToken) {
      headers["authorization"] = this.options.accessToken;
    }
    if (this.options.tokenEndPointAuthMethod === "client_secret_basic") {
      headers["authorization"] =
        "Basic " +
        Buffer.from(this.options.appId + ":" + this.options.appSecret).toString(
          "base64"
        );
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

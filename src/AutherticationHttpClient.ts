import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import { AuthenticationClientInitOptions } from "./AuthenticationClientOptions";

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
    const { data } = await this.axios.request({
      ...config,
      baseURL: this.options.host,
      timeout: 10000,
      headers: {
        ...config.headers,
        "request-from": this.options.requestFrom || "sdk",
        // 'sdk-version': `js:${SDK_VERSION}`
      },
    });
    return data;
  }
}

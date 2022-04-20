import Axios from "axios";

import { ManagementClientOptions } from "./ManagementClientOptions";
import { parseJwt } from "./utils";

export class ManagementTokenProvider {
  /** 内部变量，请不要直接引用 **/
  /** 该用户池对应的 accessToken **/
  private _accessToken: string = "";
  /** accessToken 过期时间，为 unix 时间戳 **/
  private _accessTokenExpriredAt: number = 0;
  /** Access Key 对应的用户池 ID */
  private _userPoolId: string = "";

  private options: ManagementClientOptions;

  constructor(options: ManagementClientOptions) {
    this.options = options;
  }

  private async callManagementTokenApi(): Promise<{
    accessToken: string;
    userPoolId: string;
  }> {
    const { data } = await Axios.post("/api/v3/get-management-token", {
      accessKeyId: this.options.accessKeyId,
      accessKeySecret: this.options.accessKeySecret,
    });
    const { code, message } = data;
    if (code !== 200) {
      throw Error(message);
    }
    const { access_token, expires_in } = data.data;
    this._accessToken = access_token;
    this._accessTokenExpriredAt =
      Math.floor(new Date().getTime() / 1000) + expires_in;
    const decoded = parseJwt(access_token);
    this._userPoolId = decoded.scoped_userpool_id;

    return {
      userPoolId: this._userPoolId,
      accessToken: this._accessToken,
    };
  }

  /**
   * 获取 Management API Token
   *
   * @returns {Promise<string>}
   * @memberof ManagementTokenProvider
   */
  public async getToken(): Promise<{
    accessToken: string;
    userPoolId: string;
  }> {
    if (
      this._accessToken &&
      this._accessTokenExpriredAt > new Date().getTime() / 1000
    ) {
      return { userPoolId: this._userPoolId, accessToken: this._accessToken };
    }
    return await this.callManagementTokenApi();
  }
}

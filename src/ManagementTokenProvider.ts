import Axios from 'axios';

import { ManagementClientOptions } from './ManagementClientOptions';
import { AccessTokenDto } from './models/AccessTokenDto';
import { CommonResponseDto } from './models/CommonResponseDto';
import { parseJwt } from './utils';

export interface DecodedAccessToken {
    /** 签发时间 **/
    iat: number;
    /** 过期时间 **/
    exp: number;
}

export class ManagementTokenProvider {
    /** 内部变量，请不要直接引用 **/
    /** 该用户池对应的 accessToken **/
    private _accessToken: string = '';
    /** accessToken 过期时间，为 unix 时间戳 **/
    private _accessTokenExpriredAt: number = 0;
    private options: ManagementClientOptions;

    constructor(options: ManagementClientOptions) {
        this.options = options;
        const { accessToken } = this.options;
        if (accessToken) {
            this._accessToken = accessToken;
            const decoded: DecodedAccessToken = parseJwt(accessToken);
            const { exp } = decoded;
            this._accessTokenExpriredAt = exp * 1000;
        }
    }

    private async getAccessToken() {
        const { data } = await Axios.post<CommonResponseDto & { data: AccessTokenDto }>(
            '/api/v3/get-management-token',
            {
                userPoolId: this.options.userPoolId,
                secret: this.options.secret,
            }
        );
        const { code, message } = data;
        if (code !== 200) {
            throw Error(message);
        }
        const { access_token } = data.data;
        return access_token;
    }

    /**
     * 获取 Management API Token
     *
     * @returns {Promise<string>}
     * @memberof ManagementTokenProvider
     */
    public async getToken(): Promise<string> {
        if (this.options.accessToken) {
            return this.options.accessToken;
        }

        // 缓存到 accessToken 过期前 3600 s
        if (this._accessToken && this._accessTokenExpriredAt > new Date().getTime() + 3600 * 1000) {
            return this._accessToken;
        }
        return await this.getAccessTokenFromServer();
    }

    /**
     * 刷新用户池 accessToken
     *
     * @returns
     * @memberof ManagementTokenProvider
     */
    private async getAccessTokenFromServer() {
        // 如果是通过密钥刷新
        const accessToken = await this.getAccessToken();
        this._accessToken = accessToken;
        const decoded: DecodedAccessToken = parseJwt(this._accessToken);
        const { exp } = decoded;
        this._accessTokenExpriredAt = exp * 1000;
        return this._accessToken;
    }
}

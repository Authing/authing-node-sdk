import { JWK, KeyLike } from 'jose';

export interface JWKSObject {
  keys: JWK[];
}

export interface JoseKey {
  id?: string;
  // key: Promise<KeyLike | Uint8Array>;
  key: KeyLike | Uint8Array;
}

export interface AuthUrlResult {
  url: string;
  state: string;
  nonce: string;
}

export interface AuthURLParams {
  redirect_uri: string;
  response_type: string;
  response_mode: string;
  client_id: string;
  state: string;
  nonce: string;
  scope: string;
  prompt?: string;
}

export interface OIDCTokenResponse {
  access_token: string;
  id_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
}

export interface NativeTokenParams extends Record<string, string> {
  grant_type: string;
  client_id: string;
  client_secret: string;
  scope: string;
}

export interface CodeToTokenParams {
  grant_type: 'authorization_code';
  client_id: string;
  client_secret: string;
  code: string;
  redirect_uri: string;
}

export interface RefreshTokenParams {
  grant_type: 'refresh_token';
  client_id: string;
  client_secret: string;
  refresh_token: string;
}

export interface LoginState {
  accessToken: string;
  idToken: string;
  refreshToken?: string;
  expireAt: number;
  parsedIDToken: IDToken;
  parsedAccessToken: AccessToken;
}

export interface LoginTransaction {
  state: string;
  nonce: string;
  redirectUri: string;
}

export interface UserInfo extends Record<string, any> {
  sub: string;
  name: string;
  nickname: string;
  given_name: string;
  family_name: string;
  birthdate: string;
  gender: 'M' | 'F' | 'U';
  picture: string;
  updated_at: string;
  zoneinfo: string;
  preferred_username: string;
  locale: string;
}

export interface IDToken extends UserInfo {
  sub: string;
  aud: string;
  exp: number;
  iat: number;
  iss: string;
  nonce: string;
  at_hash: string;
  s_hash: string;
}

export interface AccessToken {
  jti: string;
  sub: string;
  iat: number;
  exp: number;
  scope: string;
  iss: string;
  aud: string;
}

export interface IDToken extends Record<string, any> {
  // Token 字段
  sub: string;
  aud: string;
  exp: number;
  iat: number;
  iss: string;
  nonce: string;
  at_hash: string;
  s_hash: string;

  // 用户信息字段
  name: string;
  nickname: string;
  given_name: string;
  family_name: string;
  birthdate: string;
  gender: 'M' | 'F' | 'U';
  picture: string;
  updated_at: string;
  zoneinfo: string;
  preferred_username: string;
  locale: string;
}

export interface AccessToken {
  jti: string;
  sub: string;
  iat: number;
  exp: number;
  scope: string;
  iss: string;
  aud: string;
}

export interface LogoutURLParams {
  post_logout_redirect_uri?: string;
  id_token_hint?: string;
  state?: string;
}

import { importJWK } from "jose";
import { JWK, KeyLike } from 'jose';

/**
 * 语言
 */
export type Lang = "zh-CN" | "en-US";

export interface JWKSObject {
  keys: JWK[];
}

export interface JoseKey {
  id?: string;
  // key: Promise<KeyLike | Uint8Array>;
  key: KeyLike | Uint8Array;
}

export const pickBy = (
  obj: any,
  predicate: (value: any, key: string) => boolean
) => {
  const ret: any = {};
  for (const key of Object.keys(obj)) {
    if (predicate(obj[key], key)) {
      ret[key] = obj[key];
    }
  }
  return ret;
};

// support in The buffer module from node.js, for the browser.
var Buffer = require('buffer/').Buffer

export function parseJwt(token: string) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    Buffer.from(base64, 'base64')
      .toString()
      .split('')
      .map(function (c: string) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  return JSON.parse(jsonPayload);
}

export function generateRandomString(length: number = 30) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function generateRandomEmail(length: number = 30) {
  return `${generateRandomString(length).toLowerCase()}` + '@example.com';
}

/**
 * @description 生成随机手机号
 *
 */
export const generateRandomPhone = () => {
  const headerNums = [
    '139',
    '138',
    '137',
    '136',
    '135',
    '134',
    '159',
    '158',
    '157',
    '150',
    '151',
    '152',
    '188',
    '187',
    '182',
    '183',
    '184',
    '178',
    '130',
    '131',
    '132',
    '156',
    '155',
    '186',
    '185',
    '176',
    '133',
    '153',
    '189',
    '180',
    '181',
    '177',
  ];
  const headerNum = headerNums[Math.floor(Math.random() * 10)];
  const bodyNum = Math.random().toString().replace('0.', '').slice(0, 8);
  return headerNum + bodyNum;
};

/**
 * @description 域名标准化 host canonicalization
 * @param domain 域名
 * @returns 标准化后的域名
 */
export function domainC14n(domain: string) {
  if (domain.startsWith("http://localhost:") || domain.startsWith("localhost:")) {
    return domain;
  }
  const domainExp = /^(((?:http)|(?:https)):\/\/)?((?:[\w-_]+)(?:\.[\w-_]+)+)(:\d{1,6})?(?:\/.*)?$/;
  const matchRes = domainExp.exec(domain);
  if (matchRes && matchRes[3]) {
    return `${matchRes[1] ?? 'https://'}${matchRes[3]}${matchRes[4] || ""}`;
  }
  throw Error(`无效的域名配置: ${domain}`);
}

export function parseJWKS(jwks: JWKSObject): Promise<JoseKey[]> {
  return Promise.all(
    jwks.keys.map((k) =>
      importJWK(k).then((key) => ({
        id: k.kid,
        key,
      })),
    ),
  );
}

/**
 * 拼接处理 query 参数
 * @param params query 参数
 * @returns 拼接完成的 query 参数
 */
export function createQueryParams(params: any) {
  return Object.keys(params)
    .filter((k) => params[k] !== null && params[k] !== undefined)
    .map(
      (k) =>
        encodeURIComponent(k) + '=' + encodeURIComponent(params[k] as string),
    )
    .join('&');
}

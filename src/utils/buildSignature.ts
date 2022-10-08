const kitx = require("kitx");
const os = require("os");

function filter(value: any) {
  return typeof value === "string"
    ? value.replace(/[\t\n\r\f]/g, " ")
    : value.toString();
}

function getCanonicalizedHeaders(headers: { [x: string]: any }) {
  const keys = Object.keys(headers);

  const validHeaders: string[] = [
    'content-type',
    'x-authing-lang',
    'x-authing-request-from',
    'x-authing-sdk-client',
    'x-authing-signature-method',
    'x-authing-signature-nonce',
    'x-authing-signature-version',
    'x-authing-tenant-id',
    'date'
  ]

  const canonicalizedKeys = [];
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (validHeaders.includes(key)) {
      canonicalizedKeys.push(key);
    }
  }

  canonicalizedKeys.sort();

  let result = "";
  for (let i = 0; i < canonicalizedKeys.length; i++) {
    const key = canonicalizedKeys[i];
    result += `${key}:${filter(headers[key]).trim()}\n`;
  }

  return result;
}

function getCanonicalizedResource(
  uriPattern: string,
  query: { [x: string]: any }
) {
  const keys = Object.keys(query).sort();

  if (keys.length === 0) {
    return uriPattern;
  }

  const result = [];
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    let value = query[key];
    value =
      typeof value === "object" && value !== null
        ? encodeURI(JSON.stringify(value))
        : value;
    result.push(`${key}=${value}`);
  }

  return `${uriPattern}?${result.join("&")}`;
}

export function buildSignature(accessKeySecret: string, stringToSign: string) {
  const utf8Buff = Buffer.from(stringToSign, "utf8");
  return kitx.sha1(utf8Buff, accessKeySecret, "base64");
}

export function buildStringToSign(
  method: string,
  uriPattern: string,
  headers: { [x: string]: any },
  query: { [x: string]: any }
) {
  const contentType = headers["content-type"] || "";
  const header = `${method}\n${contentType}\n`;
  const canonicalizedHeaders = getCanonicalizedHeaders(headers);
  const canonicalizedResource = getCanonicalizedResource(uriPattern, query);

  return `${header}${canonicalizedHeaders}${canonicalizedResource}`;
}

export function buildAuthorization(
  accessKeyId: string,
  accessKeySecret: string,
  stringToSign: string
) {
  return `authing ${accessKeyId}:${buildSignature(
    accessKeySecret,
    stringToSign
  )}`;
}

const pkg = require("../../package.json");
const DEFAULT_UA =
  `AuthingIdentityCloud (${os.platform()}; ${os.arch()}) ` +
  `Node.js/${process.version} Core/${pkg.version}`;
const DEFAULT_CLIENT = `Node.js(${process.version}), ${pkg.name}: ${pkg.version}`;
export const DEFAULT_HEADERS: { [x: string]: any } = {
  accept: "application/json",
  "content-type": "application/json",
  "x-authing-signature-nonce": kitx.makeNonce(),
  "x-authing-signature-method": "HMAC-SHA1",
  "x-authing-signature-version": "1.0",
  "user-agent": DEFAULT_UA,
  "x-authing-client": DEFAULT_CLIENT,
  "x-authing-request-from": `authing-node-sdk:${pkg.version}`,
};

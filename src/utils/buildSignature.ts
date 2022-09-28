const kitx = require("kitx");
const os = require("os");

function filter(value: string) {
  return value.replace(/[\t\n\r\f]/g, " ");
}

function getCanonicalizedHeaders(headers: { [x: string]: any }) {
  const prefix = "x-authing-";
  const keys = Object.keys(headers);

  const canonicalizedKeys = [];
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key.startsWith(prefix)) {
      canonicalizedKeys.push(key);
    }
  }

  canonicalizedKeys.sort();

  var result = "";
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

  var result = [];
  for (var i = 0; i < keys.length; i++) {
    const key = keys[i];
    result.push(`${key}=${query[key]}`);
  }

  return `${uriPattern}?${result.join("&")}`;
}

function signature(accessKeySecret: string, stringToSign: string) {
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
  return `authing ${accessKeyId}:${signature(accessKeySecret, stringToSign)}`;
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

const os = require("os");
import crypto from "crypto";

function filter(value: any) {
  return typeof value === "string"
    ? value.replace(/[\t\n\r\f]/g, " ")
    : value.toString();
}

function getCanonicalizedHeaders(headers: { [x: string]: any }) {
  const keys = Object.keys(headers);
  const canonicalizedKeys = [];
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key.startsWith("x-authing-") || key === "date") {
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
    if (value === undefined) {
      continue;
    }
    value =
      typeof value === "object" && value !== null
        ? JSON.stringify(value)
        : value;
    result.push(`${key}=${value}`);
  }

  return `${uriPattern}?${result.join("&")}`;
}

export function makeNonce() {
  var counter = 0;
  let last: number = 0;
  const machine = os.hostname();
  const pid = process.pid;
  var val = Math.floor(Math.random() * 1000000000000);
  if (val === last) {
    counter++;
  } else {
    counter = 0;
  }
  last = val;
  var uid = `${machine}${pid}${val}${counter}`;
  return crypto.createHash('md5').update(uid).digest('hex')
};

export function buildSignature(accessKeySecret: string, stringToSign: string) {
  return crypto
    .createHmac("sha1", accessKeySecret)
    .update(Buffer.from(stringToSign, "utf8"))
    .digest('base64');
}

export function buildStringToSign(
  method: string,
  uriPattern: string,
  headers: { [x: string]: any },
  query: { [x: string]: any }
) {
  const header = `${method}\n`;
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
  "x-authing-signature-nonce": makeNonce(),
  "x-authing-signature-method": "HMAC-SHA1",
  "x-authing-signature-version": "1.0",
  "user-agent": DEFAULT_UA,
  "x-authing-sdk-version": `authing-node-sdk:${pkg.version}`,
};

# authing-node-sdk

[Authing](https://authing.cn) 身份云 `Node.js` 语言客户端只适用于后端服务器环境，包含 [Authing Open API](https://api.authing.cn/openapi/) 所有 Management API 的请求方法以及通过 OIDC 实现的认证侧的登录方法。

Management 模块以管理员（Administrator）的身份进行请求，用于管理 Authing 用户、角色、分组、组织机构等资源；一般来说，你在 Authing 控制台中能做的所有操作，都能用此模块完成。

AuthenticationClient 模块只适用于纯后端交互的服务器环境，支持认证、获取令牌、检查令牌、登出等认证相关方法

如果你需要以终端用户（End User）的身份进行登录、注册、登出等操作，请使用 [Guard](https://www.authing.cn/learn/guard) .

## 安装

### NPM

```bash
npm install authing-node-sdk
```

### Yarn

```bash
yarn add authing-node-sdk
```

## 使用 管理模块

### 初始化

初始化 `ManagementClient` 需要使用 `accessKeyId` 和 `accessKeySecret` 参数:

```typescript
import { ManagementClient } from "authing-node-sdk";

const managementClient = new ManagementClient({
  accessKeyId: "YOUR_ACCESS_KEY_ID",
  accessKeySecret: "YOUR_ACCESS_KEY_SECRET",
});
```

`ManagementClient` 会自动从 Authing 服务器获取 Management API Token，并通过返回的 Token 过期时间自动对 Token 进行缓存。

完整的参数和释义如下：

- `accessKeyId`: Authing 用户池 ID;
- `accessKeySecret`: Authing 用户池密钥;
- `timeout`: 超时时间，单位为 ms，默认为 10000 ms;
- `host`: Authing 服务器地址，默认为 `https://api.authing.cn`。如果你使用的是 Authing 公有云版本，请忽略此参数。如果你使用的是私有化部署的版本，此参数必填，格式如下: https://authing-api.my-authing-service.com（最后不带斜杠 /）。
- `lang`: 接口 Message 返回语言格式（可选），可选值为 zh-CN 和 en-US，默认为 zh-CN。

### 快速开始

初始化完成 `ManagementClient` 之后，你可以获取 `ManagementClient` 的实例，然后调用此实例上的方法。例如：

- 获取用户列表

```typescript
(async () => {
  const { data } = await managementClient.listUsers({
    page: 1,
    limit: 10,
  });
})();
```

- 创建角色

```typescript
(async () => {
  const { data } = await managementClient.createRole({
    code: "admin",
    description: "管理员",
    namespace: "default",
  });
})();
```

完整的接口列表，你可以在 [Authing Open API](https://api.authing.cn/openapi/) 和 [SDK 文档](https://authing-open-api.readme.io/reference/nodejs) 中获取。

## 使用 认证模块

### 初始化

初始化 `AuthenticationClient` 需要使用 `appId` 、 `appSecret` 和 `host` 参数:

```typescript
import { AuthenticationClient } from "authing-node-sdk";

const authenticationClient = new AuthenticationClient({
  appId: "YOUR_APP_ID",
  appSecret: "YOUR_APP_SECRET",
  host: "YOUR_USERPOOL_HOST",
});
```

完整的参数和释义如下：

- `appId`: Authing 应用 ID ;
- `appSecret`: Authing 应用 Secret;
- `host`: 应用对应的用户池域名，例如 pool.authing.cn;
- `redirectUri`: 认证完成后的重定向目标 URL, 会进行校验，需要和控制台的设置保持一致。
- `logoutRedirectUri`: 登出完成后的重定向目标 URL。
- `scope`: 应用侧向 Authing 请求的权限，以空格分隔，默认为 'openid profile'，成功获取的权限会出现在 Access Token 的 scope 字段中。
- `serverJWKS`: 服务端的 JWKS 公钥，用于验证 Token 签名，默认会通过网络请求从服务端的 JWKS 端点自动获取。
- `cookieKey`: 存储认证上下文的 Cookie 名称。

认证侧相关的使用和方法说明，你可以在 [Authing Nodejs SDK](https://github.com/Authing/docs/blob/feat%2Fstage3/docs/reference-new/sdk/v5/node/authentication.md) 中查看。


## 私有化部署

如果你使用的是私有化部署的 Authing IDaaS 服务，需要指定此 Authing 私有化实例的 `host`，如：

```typescript
import { ManagementClient } from "authing-node-sdk";

const managementClient = new ManagementClient({
  accessKeyId: "YOUR_ACCESS_KEY_ID",
  accessKeySecret: "YOUR_ACCESS_KEY_SECRET",
  host: "https://authing-api.my-authing-service.com",
});
```

如果你不清楚如何获取，可以联系 Authing IDaaS 服务管理员。

## 资源

- [官网](https://authing.cn)
- [开发者文档](https://docs.authing.cn/)
- [Authing Open API](https://api.authing.cn/openapi/)
- [SDK 文档](https://authing-open-api.readme.io/reference/nodejs)
- [论坛社区](https://forum.authing.cn/)

## 获取帮助

有任何疑问，可以在 Authing 论坛提出: [#authing-forum](https://forum.authing.cn/)

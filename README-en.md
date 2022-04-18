# authing-node-sdk

Node.js client library for the [Authing](https://authing.co) platform.

This Package is meant to be used by back-end servers or trusted parties performing administrative tasks. Generally speaking, anything that can be done through the Authing console (and more) can also be done through this API.

For package use at frontend (end-user), please refers to [TODO](TODO);

## Installation

### NPM

```bash
npm install authing-node-sdk
```

### Yarn

```bash
yarn add authing-node-sdk
```

## Initialization

Initialize your client class with an `accessKeyId` and `accessKeySecret`:

```typescript
import { ManagementClient } from 'authing-js-sdk'

const managementClient = new ManagementClient({
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  accessKeySecret: 'YOUR_ACCESS_KEY_SECRET',
})
```

It will obtain automatically a Management API token via the ManagementClient. Behind the scenes the Get Management Token API(`POST /api/v3/get-management-token`) is called to obtain the access_token and is by default cached for the duration of the returned expires_in value.

The complete parameters are as follows:

- `accessKeyId`: Your Authing User Pool Id;
- `accessKeySecret`: Your Authing User Pool Secret;
- `timeout`: defaults to 10000 ms;
- `host`: defaults to `https://api.authing.cn`. If you're using Authing Public Cloud Version, you can ignore this parameter, or else you're using Authing On-Premise Version, you should set this parameter to Your hosted Authing instance, like `https://authing-api.mydomain.com`.
- `lang`: defaults to `zh-CN`, the choices are `zh-CN` and `en-US`.

## Quick Start

## What is Authing ?


## Create a free Authing Account

## Issue Reporting

Free to ask on: [#authing-forum](https://forum.authing.cn/)

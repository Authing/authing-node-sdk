import { AuthenticationClient, ManagementClient } from "../src";

// export const managementClient = new ManagementClient({
//   accessKeyId: process.env.AUTHING_SDK_TEST_ACCESS_KEY_ID!,
//   accessKeySecret: process.env.AUTHING_SDK_TEST_ACCESS_KEY_SECRET!,
//   host: process.env.AUTHING_SDK_TEST_HOST,
// });
export const managementClient = new ManagementClient({
  accessKeyId: '63ad5518ca2fc91673a47f2c',
  accessKeySecret: '7e658817bff232b45d1dc8f1d6a620b2',
  host: 'https://console.authing.cn',
});


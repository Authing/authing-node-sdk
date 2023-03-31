import { ManagementClient, MetadataManagementClient } from "../src";

export const managementClient = new ManagementClient({
  accessKeyId: process.env.AUTHING_SDK_TEST_ACCESS_KEY_ID!,
  accessKeySecret: process.env.AUTHING_SDK_TEST_ACCESS_KEY_SECRET!,
  host: process.env.AUTHING_SDK_TEST_HOST,
});

export const metadataManagementClient = new MetadataManagementClient({
  accessKeyId: process.env.AUTHING_SDK_TEST_ACCESS_KEY_ID!,
  accessKeySecret: process.env.AUTHING_SDK_TEST_ACCESS_KEY_SECRET!,
  host: process.env.AUTHING_SDK_TEST_HOST,
});

export const uebaModel = metadataManagementClient.getUebaModel();

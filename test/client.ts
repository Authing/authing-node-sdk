import { ManagementClient, MetadataClient } from "../src";

export const managementClient = new ManagementClient({
  accessKeyId: process.env.AUTHING_SDK_TEST_ACCESS_KEY_ID!,
  accessKeySecret: process.env.AUTHING_SDK_TEST_ACCESS_KEY_SECRET!,
  host: process.env.AUTHING_SDK_TEST_HOST,
});

export const metadataClient = new MetadataClient({
  accessKeyId: process.env.AUTHING_SDK_TEST_ACCESS_KEY_ID!,
  accessKeySecret: process.env.AUTHING_SDK_TEST_ACCESS_KEY_SECRET!,
  host: process.env.AUTHING_SDK_TEST_HOST,
});

export const uebaModel = metadataClient.getUebaModel(process.env.AUTHING_SDK_UEBA_MODEL_ID!);

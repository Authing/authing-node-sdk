import { Models } from "../../src";
import {
  generateRandomEmail,
  generateRandomPhone,
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

const fieldMapping = [
  {
    targetKey: "name",
    expression: "name",
  },
  {
    targetKey: "nickname",
    expression: "name",
  },
  {
    targetKey: "phone",
    expression: "mobile",
  },
  {
    targetKey: "email",
    expression: "enterprise_email",
  },
  {
    targetKey: "country",
    expression: "country",
  },
  {
    targetKey: "city",
    expression: "city",
  },
  {
    targetKey: "gender",
    expression: "gender",
  },
  {
    targetKey: "photo",
    expression: "avatar_formatted",
  },
  {
    targetKey: "externalId",
    expression: "user_id",
  },
];

describe("createSyncTask", () => {
  beforeAll(async () => {});

  describe("Success", () => {
    it("Lark", async () => {
      const { statusCode, data, message } =
        await managementClient.createSyncTask({
          clientConfig: {
            larkConfig: {
              app_id: "1",
              app_secret: "2",
              encrypt_key: "3",
              verification_token: "4",
            },
          },
          fieldMapping,
          syncTaskTrigger: Models.CreateSyncTaskDto.syncTaskTrigger.MANUALLY,
          syncTaskFlow: Models.CreateSyncTaskDto.syncTaskFlow.UPSTREAM,
          syncTaskType: Models.CreateSyncTaskDto.syncTaskType.LARK,
          syncTaskName: "飞书上游",
        });

      expect(statusCode).toEqual(200);
      expect(data.syncTaskType).toEqual(
        Models.CreateSyncTaskDto.syncTaskType.LARK
      );
    });

    it("Wechatwork", async () => {
      const { statusCode, data, message } =
        await managementClient.createSyncTask({
          clientConfig: {
            wechatworkConfig: {
              corpID: "1",
              secret: "2",
              token: "3",
              encodingAESKey: "4",
            },
          },
          fieldMapping,
          syncTaskTrigger: Models.CreateSyncTaskDto.syncTaskTrigger.MANUALLY,
          syncTaskFlow: Models.CreateSyncTaskDto.syncTaskFlow.UPSTREAM,
          syncTaskType: Models.CreateSyncTaskDto.syncTaskType.WECHATWORK,
          syncTaskName: "飞书上游",
        });

      expect(statusCode).toEqual(200);
      expect(data.syncTaskType).toEqual(
        Models.CreateSyncTaskDto.syncTaskType.WECHATWORK
      );
    });
  });

  describe("Fail", () => {});
});

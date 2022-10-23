import { Models } from "../../src";
import {
  generateRandomEmail,
  generateRandomPhone,
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

describe("updateSyncTask", () => {
  let syncTaskId: number;

  beforeAll(async () => {
    const { data } = await managementClient.listSyncTasks();
    syncTaskId = data.list?.[0].syncTaskId;
  });

  describe("Success", () => {
    it("success", async () => {
      const { statusCode, data, message } =
        await managementClient.updateSyncTask({
          syncTaskId,
          clientConfig: {
            larkConfig: {
              app_id: "1",
              app_secret: "2",
              encrypt_key: "3",
              verification_token: "4",
            },
          },
          fieldMapping: [
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
          ],
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
  });

  describe("Fail", () => {});
});

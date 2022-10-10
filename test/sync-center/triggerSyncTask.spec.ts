import { Models } from "../../src";
import {
  generateRandomEmail,
  generateRandomPhone,
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

describe("triggerSyncTask", () => {
  let syncTaskId: number;

  beforeAll(async () => {
    const { data } = await managementClient.listSyncTasks();
    syncTaskId = data.list?.[0].syncTaskId;
  });

  describe("Success", () => {
    it("success", async () => {
      const { statusCode, data, message } =
        await managementClient.triggerSyncTask({
          syncTaskId,
        });

      expect(statusCode).toEqual(200);
      expect(data.syncJobId).toEqual(syncJobId);
    });
  });

  describe("Fail", () => {
    it("no identity provider config found", async () => {
      const { statusCode, data, message } =
        await managementClient.triggerSyncTask({
          syncTaskId: 0,
        });

      expect(statusCode).toEqual(602);
      expect(message).toEqual("no identity provider config found");
    });
  });
});

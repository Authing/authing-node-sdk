import { Models } from "../../src";
import {
  generateRandomEmail,
  generateRandomPhone,
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

describe("getSyncTask", () => {
  let syncTaskId: number;

  beforeAll(async () => {
    const { data } = await managementClient.listSyncTasks();
    syncTaskId = data.list?.[0].syncTaskId;
  });

  describe("Success", () => {
    it("success", async () => {
      const { statusCode, data, message } = await managementClient.getSyncTask({
        syncTaskId,
      });

      expect(statusCode).toEqual(200);
      expect(data.syncTaskId).toEqual(syncTaskId);
    });
  });

  describe("Fail", () => {
    it("syncTaskId invalid", async () => {
      const { statusCode, data, message } = await managementClient.getSyncTask({
        syncJobId: -1,
      });

      expect(statusCode).toEqual(400);
      expect(message).toEqual(
        'syncTaskId must not be less than 1,syncTaskId must be a number conforming to the specified constraints"'
      );
    });
  });
});

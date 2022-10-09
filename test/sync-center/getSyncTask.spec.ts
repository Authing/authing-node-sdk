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

  describe("Fail", () => {});
});

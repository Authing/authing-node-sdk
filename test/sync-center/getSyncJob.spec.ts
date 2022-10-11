import { Models } from "../../src";
import {
  generateRandomEmail,
  generateRandomPhone,
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

describe("getSyncTask", () => {
  let syncJobId: number;
  let syncTaskId: string;

  beforeAll(async () => {
    // TODO: get a task which must have jobs
    const { data } = await managementClient.listSyncTasks();
    syncTaskId = data.list?.[0].syncTaskId;
    const { data: data2 } = await managementClient.listSyncJobs({
      syncTaskId,
    });
    syncJobId = data2.list?.[0].syncJobId;
  });

  describe("Success", () => {
    it("success", async () => {
      const { statusCode, data, message } = await managementClient.getSyncJob({
        syncJobId,
      });

      expect(statusCode).toEqual(200);
      expect(data.syncJobId).toEqual(syncJobId);
    });
  });

  describe("Fail", () => {
    it("syncJobId invalid", async () => {
      const { statusCode, data, message } = await managementClient.getSyncJob({
        syncJobId: -1,
      });

      expect(statusCode).toEqual(400);
      expect(message).toEqual(
        'syncJobId must not be less than 1,syncJobId must be a number conforming to the specified constraints"'
      );
    });
  });
});

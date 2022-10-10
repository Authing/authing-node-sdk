import { Models } from "../../src";
import {
  generateRandomEmail,
  generateRandomPhone,
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

describe("listSyncJobLogs", () => {
  let syncJobId: number;
  let syncTaskId: string;

  beforeAll(async () => {
    const { data } = await managementClient.listSyncTasks();
    syncTaskId = data.list?.[0].syncTaskId;
    const { data: data2 } = await managementClient.listSyncJobs({
      syncTaskId,
    });
    syncJobId = data2.list?.[0].syncJobId;
  });

  describe("Success", () => {
    it("success", async () => {
      const { statusCode, data } = await managementClient.listSyncJobLogs({
        syncJobId,
      });

      expect(statusCode).toEqual(200);
      // expect(data).toEqual(syncJobId);
    });
  });

  describe("Fail", () => {});
});

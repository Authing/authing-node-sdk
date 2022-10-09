import { Models } from "../../src";
import {
  generateRandomEmail,
  generateRandomPhone,
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

describe("listSyncJobs", () => {
  let syncTaskId: string;

  beforeAll(async () => {
    const { data } = await managementClient.listSyncTasks();
    syncTaskId = data.list?.[0].syncTaskId;
  });

  describe("Success", () => {
    it("success", async () => {
      const { statusCode, data } = await managementClient.listSyncJobs({
        syncTaskId,
      });
      expect(statusCode).toEqual(200);
      expect(data.totalCount).toBeGreaterThanOrEqual(0);
    });
  });

  describe("Fail", () => {});
});

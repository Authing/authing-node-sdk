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

  describe("Fail", () => {
    it("syncJobId invalid", async () => {
      const { statusCode, data, message } = await managementClient.listSyncJobs(
        {
          syncJobId: -1,
        }
      );

      expect(statusCode).toEqual(400);
      expect(message).toEqual(
        'syncJobId must not be less than 1,syncJobId must be a number conforming to the specified constraints"'
      );
    });
  });
});

import { Models } from "../../src";
import {
  generateRandomEmail,
  generateRandomPhone,
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

describe("cancelSyncRiskOperation", () => {
  let syncRiskOperationIds: string[];
  let syncTaskId: string;

  beforeAll(async () => {
    const { data } = await managementClient.listSyncTasks();
    syncTaskId = data.list?.[0].syncTaskId;
    const { data2 } = await managementClient.listSyncRiskOperations({
      syncTaskId,
      status: Models.SyncRiskOperationDto.status.EXECUTING,
    });
    syncRiskOperationIds = data2.list?.map((x) => x.syncRiskOperationId);
  });

  describe("Success", () => {
    it("success", async () => {
      const { statusCode, data } =
        await managementClient.cancelSyncRiskOperation({
          syncRiskOperationIds,
        });
      expect(statusCode).toEqual(200);
      expect(data.totalCount).toBeGreaterThanOrEqual(0);
    });
  });

  describe("Fail", () => {});
});

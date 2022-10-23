import { Models } from "../../src";
import {
  generateRandomEmail,
  generateRandomPhone,
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

describe("listSyncRiskOperations", () => {
  beforeAll(async () => {
    // TODO: add risk operations first
  });

  describe("Success", () => {
    it("success", async () => {
      const { statusCode, data } =
        await managementClient.listSyncRiskOperations();
      expect(statusCode).toEqual(200);
      expect(data.totalCount).toBeGreaterThanOrEqual(0);
    });
  });

  describe("Fail", () => {});
});

import { Models } from "../../src";
import {
  generateRandomEmail,
  generateRandomPhone,
  generateRandomString,
} from "../../src/utils/index";
import { managementClient } from "../client";

describe("listSyncTasks", () => {
  beforeAll(async () => {});

  describe("Success", () => {
    it("success", async () => {
      const { statusCode, data } = await managementClient.listSyncTasks();
      expect(statusCode).toEqual(200);
      expect(data.totalCount).toBeGreaterThanOrEqual(0);
    });
  });

  describe("Fail", () => {});
});

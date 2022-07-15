import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("createRole", () => {
  beforeAll(async () => {
  });

  describe("Fail", () => {
    it("Invalid role code", async () => {
      const { statusCode, message, data } = await managementClient.createRole({
        code: '../../../@example.com'
      });
      expect(statusCode).toEqual(400);
      expect(message).toContain(
        "invalid role code"
      );
    });

    it("Role code length grater than 64", async () => {
      const { statusCode, message, data } = await managementClient.createRole({
        code: generateRandomString(100)
      });
      expect(statusCode).toEqual(400);
    });
  });
});

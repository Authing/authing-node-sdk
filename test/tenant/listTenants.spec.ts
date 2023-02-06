import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("listTenants", () => {
  beforeAll(async () => {});

  // 析构;
  afterAll(async () => {});

  describe("Success", () => {
    it("list tenants", async () => {
      const {
        statusCode,
        data: listTenants,
        message,
      } = await managementClient.listTenants({});

      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });
});

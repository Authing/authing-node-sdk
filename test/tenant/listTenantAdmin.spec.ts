import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("listTenantAdmin", () => {
  const tenantId = process.env.AUTHING_SDK_TEST_TENANT_ID; // 设置好租户 id
  beforeAll(async () => {});

  // 析构;
  afterAll(async () => {});

  describe("Success", () => {
    it("list tenants", async () => {
      const {
        statusCode,
        data: tenantAdmins,
        message,
      } = await managementClient.listTenantAdmin({
        tenantId,
      });

      expect(statusCode).toEqual(200);
      expect(message).toEqual("");
    });
  });

  describe("Fail", () => {
    it("tenantId is required", async () => {
      const {
        statusCode,
        data: tenant,
        message,
      } = await managementClient.listTenantAdmin({});
      expect(statusCode).toEqual(400);
    });
  });
});

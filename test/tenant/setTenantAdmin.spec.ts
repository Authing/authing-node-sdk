import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("setTeanantAdmin", () => {
  const tenantId = process.env.AUTHING_SDK_TEST_TENANT_ID; // 设置好租户 id
  let userId: string;
  beforeAll(async () => {
    const { statusCode, data, message } = await managementClient.listUsers({
      options: {
        withCustomData: true,
        withIdentities: true,
        withDepartmentIds: true,
      },
    });
    const user = data.list?.[0];
    userId = user.userId;
  });

  // 析构;
  afterAll(async () => {});

  describe("Success", () => {
    it("set tenant admin", async () => {
      const {
        statusCode,
        data: tenantAdmins,
        message,
      } = await managementClient.setTenantAdmin({
        tenantId,
        linkUserIds: [userId],
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
      } = await managementClient.setTenantAdmin({});
      expect(statusCode).toEqual(400);
      await managementClient.deleteTenantAdmin({
        tenantId,
        linkUserId: userId,
      });
    });
  });
});

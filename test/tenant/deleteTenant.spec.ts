import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("deleteTenant", () => {
  let tenantId: string;

  beforeAll(async () => {
    const {
      statusCode,
      data: tenant,
      message,
    } = await managementClient.createTenant({
      name: generateRandomString(10),
    });
    tenantId = tenant.tenantId;
  });

  describe("Success", () => {
    it("delete tenant", async () => {
      const {
        statusCode,
        data: tenant,
        message,
      } = await managementClient.deleteTenant({
        tenantId,
      });

      expect(statusCode).toEqual(200);
    });
  });

  // 析构;
  afterAll(async () => {
    //删除用户
    // const { statusCode, data, message } =
    //   await managementClient.deleteDepartment({
    //   });
  });

  describe("Fail", () => {
    it("tenant id must be not empty", async () => {
      const {
        statusCode,
        data: tenant,
        message,
      } = await managementClient.deleteTenant({});
      expect(statusCode).toEqual(400);
    });
  });
});

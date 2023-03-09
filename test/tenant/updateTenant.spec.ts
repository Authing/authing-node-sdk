import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("updateTenant", () => {
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
    it("update tenant", async () => {
      const name = generateRandomString(10);
      const {
        statusCode,
        data: tenant,
        message,
      } = await managementClient.updateTenant({
        name,
      });

      expect(statusCode).toEqual(200);
      expect(tenant.name).toEqual(name);
    });
  });

  // 析构;
  afterAll(async () => {
    const {
      statusCode,
      data: tenant,
      message,
    } = await managementClient.deleteTenant({
      tenantId,
    });
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

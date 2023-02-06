import { generateRandomString } from "../../src/utils";
import { managementClient } from "../client";

describe("createTenant", () => {
  const name = generateRandomString(10);

  beforeAll(async () => {});

  describe("Success", () => {
    it("create tenant", async () => {
      const {
        statusCode,
        data: tenant,
        message,
      } = await managementClient.createTenant({
        name,
      });

      expect(statusCode).toEqual(200);
      expect(tenant.name).toEqual(name);
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
    it("tenant name must be not empty", async () => {
      const {
        statusCode,
        data: tenant,
        message,
      } = await managementClient.createTenant({});
      expect(statusCode).toEqual(400);
    });
  });
});
